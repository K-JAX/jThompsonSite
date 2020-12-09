import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import styled from 'styled-components';
// var sanitizeHtml = require('sanitize-html');

// Components
import Hero from '../Molecules/Hero';
import StatBox from '../Organisms/StatBox';
import BranchLine from '../Atoms/BranchLine';
import BranchBox from '../Molecules/BranchBox';
import UserContentTree from '../Organisms/UserContentTree';

/**
 * GraphQL project query
 */
const PROJ_QUERY = gql`
  query ProjectQuery($uri: String!) {
    projectBy(uri: $uri) {
      id
      slug
      title
      projectId
      featuredImage {
        sourceUrl
        srcSet
      }
      content
      colorPalette {
        colorone
        colortwo
        colorthree
        colorfour
        colorfive
        colorsix
        colorseven
        coloreight
        colornine
        colorten
      }
      date
      location
      budget
      projectSummary
      projectTypes {
        edges {
          node {
            name
          }
        }
      }
      materials {
        edges {
          node {
            name
          }
        }
      }
      styles {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;

/**
 * Fetch and display a Page
 */
class ProjectSingle extends Component {
  state = {
    project: {
      tite: '',
      slug: '',
      date: '',
      location: '',
      budget: '',
      projectSummary: '',
      content: '',
      featuredImage: {}
    },
    types: [],
    materials: [],
    styles: []
  };

  componentDidMount() {
    this.executeProjectQuery();

  }

  componentDidUpdate( prevProps ) {
    let { props } = this;
    if(props.match.params.slug !== prevProps.match.params.slug){
      this.executeProjectQuery();
    }
  }  
  
  /**
   * Execute page query, process the response and set the state
   */

  executeProjectQuery = async () => {
    const { match, client } = this.props;
    let uri = match.params.slug;
    const result = await client.query({
      query: PROJ_QUERY,
      variables: { uri }
    });
    const project = result.data.projectBy;

    let colorsArray = Object.entries(project.colorPalette).slice(0,10).map(entry => entry[1])

    const colors = colorsArray.map((color, index) => {
      if( color !== null && color !== '' ){
        return <li key={index} className="color-swatch" style={{background: `${color}`}}></li>;
      }
    });

    // console.log( Object.values(project.colorPalette) );
    
    const types = project.projectTypes.edges.map((type, index) => 
      <li key={index}>{type.node.name}</li>
    );
    
    const materials = project.materials.edges.map((material, index) => 
      <li key={index}>{material.node.name}</li>
    );
    const styles = project.styles.edges.map((style, index) => 
      <li key={index}>{style.node.name}</li>
    );

    this.setState({ project, colors, types, materials, styles });
  }
  
  render() {
    const { project, colors, types, materials, styles } = this.state;

    // const materials = ['something', 'another', 'holyshit'];
    const year = project.date.slice(0, 4);
    return (
      <ProjectMain>
        <Hero 
          captionTitle={project.title} 
          date={year} 
          location={project.location} 
          img={project.featuredImage.sourceUrl} 
        />
        <section className='tree-trunk' >
          <div className="trunk left">
            <BranchLine direction="left" />
            <StatBox 
              materials={materials} 
              styles={styles} 
              colors={colors}
            />
          </div>
          <div className="trunk right">
            <BranchLine direction="right" />
            <BranchBox title="Project Summary" content={project.projectSummary} />
          </div>
        </section>
        <UserContentTree content={project.content} />
      </ProjectMain>
    );
  }
}

export default withApollo(ProjectSingle);



const ProjectMain = styled.main`
  display: grid;
  grid-template-columns: 50% 50%;
  padding-right: 85px;
  section{
    grid-column-start: 1;
    grid-column-end: 3; 
    display: grid;
    position: relative;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto;
    .trunk{
      display: grid;
      width: 100%;
      height: 100%;
      grid-template-rows: auto 1fr;
    }

    .box{
      align-self: start;
      grid-row-start: 2;
      grid-row-end: 2;
      justify-self: center;
      max-width: 70%;
      padding: 44px 58px;
      border-top: 5px solid black;
      background: linear-gradient(180deg, rgba(226,223,223,1) 0%, rgba(245,242,241,1) 100%);
      box-shadow: 5px 5px 100px -25px rgba(0,0,0,0.25);
    }
    &.tree-trunk {
      &:after{
        content: '';
        position: absolute;
        grid-column-start: 2;
        left: 0;
        top: 0;
        width: 1px;
        height: 100%;
        background: black;
      }
      &:nth-child(odd){
        .branch.left{
          margin-top: 100px;
        }
      }
      &:nth-child(even){
        .branch.right{
          margin-top: 100px;
        }
      }      
    }
  }
`