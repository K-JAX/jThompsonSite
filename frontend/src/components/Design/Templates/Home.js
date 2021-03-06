import React, { Component, createContext } from "react";
import { withApollo } from "react-apollo";
import { withBreakpoints } from "react-breakpoints";
import { compose } from "recompose";
import gql from "graphql-tag";
import { TransitionGroup, Transition } from "react-transition-group";
import styled from "styled-components";

// Components
import ProjectSingle from "./Project-Single";
import { TransitionWipeLayers } from "../Molecules/TransitionWipeLayers";
import { LoadingMatte } from "../Atoms/LoadingMatte";

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
		console.log(this.props.location.state.from);
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
			return <LoadingMatte />;
		}

		// console.log(this.props);
		return (
			<PageDiv status={status} className={`page page-route-${status}`}>
				<TransitionWipeLayers
					className="z-10"
					status={status}
					from={this.props.location.state.from}
					location={this.props.location}
				/>
				<div
					className="z-1 container-fluid"
					style={
						breakpoints[currentBreakpoint] > breakpoints.lg
							? { marginLeft: "300px" }
							: {}
					}
				>
					<ProjectSingle featured={true} options={slideshowOptions} />
				</div>
			</PageDiv>
		);
	}
}

export default compose(withApollo, withBreakpoints)(Home);

const PageDiv = styled.div`
	${(props) => props.status === "entering" && `z-index: -2;`}
	${(props) =>
		(props.status === "exiting" || props.status === "exited") &&
		`z-index: -2;`}
`;
