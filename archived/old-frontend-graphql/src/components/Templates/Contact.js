import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import axios from 'axios';

// Components
import Form from '../Organisms/Form';

/**
 * GraphQL page query that takes a page slug as a uri
 * Returns the title and content of the page
 */
const PAGE_QUERY = gql`
  query PageQuery {
    pageBy(uri: "contact") {
      title
      content
    }
  }
`;

/**
 * Fetch and display a Page
 */
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      page: {
        title: '',
        content: '',
      },
      form: [],
    };
  }



  componentDidMount() {
    this.executePageQuery();
    this.getForm();
  }

  componentDidUpdate( prevProps ) {
    let { props } = this;
    if(props.match.params.slug !== prevProps.match.params.slug){
      this.executePageQuery();
      // this.getForm();
    }
  }  

  getForm = () => {
      axios.get('http://localhost:8080/wp-json/forms/v1/forms/51')
        .then(res => {
            const form = res.data;
            this.setState({ isLoaded: true, form });
        })
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

  // renderForm = () => {
  //   const {form, isLoaded} = this.state;

  //     form.fields.map((field) => {
  //        return <li>{ field.name }</li>
  //     });
  // }
  


  render() {
    const { page, form, isLoaded } = this.state;

    return (
      <div style={{marginLeft: '315px'}}>
        <div className="pa2">
          <h1>{page.title}</h1>
        </div>
        <div>
          <h2>Lets check some more shit right here then.</h2>
        </div>
        {/* <div dangerouslySetInnerHTML={{__html: page.content }} /> */}
        { isLoaded ? <Form data={form} /> : '' }
      </div>
    );
  }
}

export default withApollo(Contact);
