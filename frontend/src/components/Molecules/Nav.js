import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { withApollo } from 'react-apollo';
import { compose } from 'recompose';
import gql from 'graphql-tag';
import { AUTH_TOKEN } from '../../constants';

/**
 * GraphQL menu query
 * Gets the labels, types (internal or external) and URLs
 */
const MENU_QUERY = gql`
  query MenuQuery {
    headerMenu {
      url
      label
      type
    }
  }
`;
// Checks if urltype is internal or external
const isInternal = urltype => urltype.includes('internal');

class Nav extends Component {
  state = {
    menus: [],
  };

  componentDidMount() {
    this.executeMenu();
  }

    /**
   * Execute the menu query, parse the result and set the state
   */
  executeMenu = async () => {
    const { client } = this.props;
    const result = await client.query({
      query: MENU_QUERY,
    });
    const menus = result.data.headerMenu;
    // const menus = result.data.menus.nodes[0].menuItems.edges;
    this.setState({ menus });
  };

  
    render() { 
      const authToken = localStorage.getItem(AUTH_TOKEN);
      const { className, history } = this.props;      
      const { menus } = this.state;
      const { pathname } = this.props;
      let isHome;

      if ( pathname === '/'){
        isHome = true
      };

        return ( 
          <nav className={`menuBox ${className}`}>
            {menus.map(menu => {
              if (isInternal(menu.type)) {
                return (
                  <Link
                    key={menu.label}
                    to={menu.url}
                    className="ml1 no-underline black"
                  >
                    {menu.label}
                  </Link>
                );
              }
              return (
                <a
                  key={menu.label}
                  href={menu.url}
                  className="ml1 no-underline black"
                >
                  {menu.label}
                </a>
              );
            })}
          </nav>
         );
    }
}
 
export default compose(
  // withRouter,
  withApollo,
)(Nav);