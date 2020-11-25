import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import styled from 'styled-components';

// Components
import Headline from '../Atoms/Headline';
import FigureLink from '../Organisms/FigureLink';


/**
 * GraphQL page query that takes a page slug as a uri
 * Returns the title and content of the page
 */
const PROJ_QUERY = gql`
  query ProjectTypeQuery($uri: [String]) {
    projectTypes(where: {slug: $uri}) {
      edges {
        node {
          name
          slug
          projects {
            edges {
              node {
                title
                slug
                uri
                featuredImage {
                  sourceUrl
                  srcSet
                }
                projectTypes {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * Fetch and display a Page
 */
class ProjectType extends Component {
  state = {
    title: '',
    projects: []
  };

  componentDidMount() {
    // this.executePageQuery();
    this.executeProjectQuery();
  }

  componentDidUpdate( prevProps ) {
    let { props } = this;
    if(props.match.params.slug !== prevProps.match.params.slug){
      // this.executePageQuery();
      this.executeProjectQuery();
    }
  }  
  
  /**
   * Execute page query, process the response and set the state
   */
  // executePageQuery = async () => {
  //   const { match, client } = this.props;
  //   let uri = match.params.slug;
  //   if (!uri) {
  //     uri = 'welcome';
  //   }
  //   const result = await client.query({
  //     query: PAGE_QUERY,
  //     variables: { uri },
  //   });
  //   const page = result.data.pageBy;
  //   this.setState({ page });
  // };

  executeProjectQuery = async () => {
    const { match, client } = this.props;
    let uri = match.params.slug;
    if (!uri) {
      uri = 'welcome';
    }
    const result = await client.query({
      query: PROJ_QUERY,
      variables: { uri },
    });
    let type = result.data.projectTypes.edges[0].node.slug;
    let title = result.data.projectTypes.edges[0].node.name;
    let projects = result.data.projectTypes.edges[0].node.projects.edges;
    projects = projects.map(project => {
      const finalLink = `/portfolio/${type}/${project.node.slug}`;
      const modifiedProject = { ...project };
      modifiedProject.node.link = finalLink;
      return modifiedProject;
    });
    this.setState({ title, projects });
  }
  
  render() {
    const { title, projects } = this.state;

    return (
      <ProjectTypeTemplate>
        <Headline text={title} />

          <ProjectListings>
            { projects.map((project, index) => 
                <li className={ (index + 1) % 2 ? 'left' : 'right'} key={index}>
                  <Link to={project.node.link}>
                    <FigureLink 
                      alignment={ (index + 1) % 2 ? 'left' : 'right'}
                      captionTitle={project.node.title} 
                      img={ project.node.featuredImage !== null ? project.node.featuredImage.sourceUrl : '' } 
                    />
                  </Link>
                </li>
              )
            }
          </ProjectListings>
      </ProjectTypeTemplate>
    );
  }
}

export default withApollo(ProjectType);

const ProjectTypeTemplate = styled.main`
  display: grid;
  .page-headline{
    justify-self: end;
    grid-column-end: 1;
    justify-content: end;
    text-align: right;
  }
`
const ProjectListings = styled.ul`
  list-style: none;
  padding: 0;
  padding-right: 90px;

  li{
    height: 605px;
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 140px 0;
    &:first-of-type{
      margin-top: 50px;
    }
    a{
      text-decoration: none;
    }
    &.left{
      figure, a{
        grid-column-start: 2;
      }
      figcaption{
        margin-left: -111px;
      }
    }
    &.right{
      figure, a{
        grid-column-start: 1;
      }
      figcaption{
        margin-right: -111px;
      }
    }
  }
`