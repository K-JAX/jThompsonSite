import React, { Component, createContext } from "react";
import { withApollo } from "react-apollo";
import { withBreakpoints } from "react-breakpoints";
import { compose } from "recompose";
import gql from "graphql-tag";
import { TransitionGroup, Transition } from "react-transition-group";

// Components
import ProjectSingle from "./Project-Single";
// import {
// 	SlideshowContext,
// 	SlideshowProvider,
// } from "../../Functional/SlideshowContext";

/**
 * GraphQL page query
 * Gets page's title and content using slug as uri
 */
const HOME_QUERY = gql`
	query MyQuery {
		page(id: "home", idType: URI) {
			uri
			sliderTimer {
				slideshowTimer
				transitionSpeed
			}
		}
	}
`;

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slideshowOptions: {},
			isLoaded: false,
		};
	}

	componentDidMount() {
		this.executePageQuery();
		// console.log(this.props.status);
	}

	componentDidUpdate() {
		// console.log(this.props.status);
	}

	componentWillUnmount() {
		// this.state = {
		// 	bool: false,
		// };
	}

	executePageQuery = async () => {
		const { client } = this.props;
		const result = await client.query({
			query: HOME_QUERY,
		});
		this.setState({
			slideshowOptions: result.data.page.sliderTimer,
			isLoaded: true,
		});
	};

	render() {
		const { isLoaded, slideshowOptions } = this.state;
		const { breakpoints, currentBreakpoint, status } = this.props;
		if (!isLoaded) {
			return <p>Loading</p>;
		}

		// console.log(this.props);
		return (
			<div
				className={`page page-route-${status} container-fluid`}
				style={
					breakpoints[currentBreakpoint] > breakpoints.lg
						? { marginLeft: "300px" }
						: {}
				}
			>
				<ProjectSingle featured={true} options={slideshowOptions} />
			</div>
		);
	}
}

export default compose(withApollo, withBreakpoints)(Home);
