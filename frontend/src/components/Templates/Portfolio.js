import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import styled from 'styled-components';

// Component
import Headline from '../Atoms/Headline';
import FigureLink from '../Organisms/FigureLink';
/**
 * GraphQL page query that takes a page slug as a uri
 * Returns the title and content of the page
 */
const PAGE_QUERY = gql`
  query PageQuery{
    pageBy(uri: "portfolio") {
      title
      content
    }
  }
`;

const PROJ_QUERY = gql`
  query ProjectQuery {
    projectTypes {
      edges {
        node {
          slug
          name
          featured_image{
            thumbnail
            medium
            medium_large
            large
            full
            default
          }
        }
      }
    }
  }
`;


/**
 * Fetch and display a Page
 */
class Portfolio extends Component {
  state = {
    page: {
      title: '',
      content: '',
    },
    projectTypes: []
  };

  componentDidMount() {
    this.executePageQuery();
    this.executeProjectTypeQuery();
  }

  componentDidUpdate( prevProps ) {
    let { props } = this;
    if(props.match.params.slug !== prevProps.match.params.slug){
      this.executePageQuery();
      this.executeProjectTypeQuery();
    }
  }  
  
  /**
   * Execute page query, process the response and set the state
   */
  executePageQuery = async () => {
    const { match, client } = this.props;
    let uri = match.params.slug;
    if (!uri) {
      uri = 'welcome';
    }
    const result = await client.query({
      query: PAGE_QUERY,
      variables: { uri },
    });
    const page = result.data.pageBy;
    this.setState({ page });
  };

  executeProjectTypeQuery = async () => {
    const { /*match,*/ client } = this.props;
    const result = await client.query({
      query: PROJ_QUERY,
    });
    let projectTypes = result.data.projectTypes.edges;
    projectTypes = projectTypes.map(project => {
      const finalLink = `/portfolio/${project.node.slug}`;
      const modifiedProject = { ...project };
      modifiedProject.node.link = finalLink;
      return modifiedProject;
    });
    this.setState({ projectTypes });
  }
  
  render() {
    const { page, projectTypes } = this.state;
    const { loaded } = this.props;
    
    console.log(page.content);
    
    return (
      <PortfolioTemplate className="template-container">
        <Headline text={page.title} loaded={loaded} />
        <nav>
          
          <ul>
            { projectTypes.map((project, index ) => 
              
                <li key={index} >
                  
                  <Link to={project.node.link}>
                  <FigureLink 
                    alignment={index % 2 ? 'right' : 'left'} 
                    img={ project.node.featured_image.default } 
                    captionTitle={ project.node.name } 
                  />
                  {/* <img 
                  src={project.node.featured_image.medium_large}
                  srcSet={
                    project.node.featured_image.thumbnail + ', ' +
                    project.node.featured_image.medium + ', ' +
                    project.node.featured_image.medium_large + ', ' +
                    project.node.featured_image.large + ', ' +
                    project.node.featured_image.full
                  }
                  alt={`Figure for ${project.node.name}`}
                  /> */}
                  </Link>
                </li>

              
              )
            }
          </ul>
        </nav>
      </PortfolioTemplate>
    );
  }
}

export default withApollo(Portfolio);


const PortfolioTemplate = styled.main`
  grid-template-areas: 
    '. body marginR'
    '. body .';
  grid-template-columns: 50px auto 50px;
  .page-heading{
    grid-area: marginR;
    justify-self: end;
  }
  nav{
    grid-column-start: 1;
    grid-column-end: 4;
    ul{
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 700px;
      padding-left: 0;
      list-style: none;
      li {
        width: auto;
        height:100%;
        a{
          text-decoration: none;
        }

      }
    }
  }
`