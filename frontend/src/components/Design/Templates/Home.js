import React, { Component } from "react";
import { withApollo } from "react-apollo";
import { withBreakpoints } from "react-breakpoints";
import { compose } from "recompose";
import gql from "graphql-tag";
import styled from "styled-components";
import { Spring, animated } from "react-spring/renderprops";
import { getPreviousPath } from "../../Functional/GetPreviousPath";

// Components
import ProjectSingle from "./Project-Single";
import { Wipes } from "../Molecules/Wipes";
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
		// console.log(this.props.location);
		// console.log(this.props.status);
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
		if (!isLoaded) return <LoadingMatte />;

		// console.log(this.props);
		return (
			<PageDiv status={status} className={`page page-route-${status}`}>
				<Wipes
					className="z-10"
					status={status}
					from={0}
					enter={105}
					delay={800}
				/>
				<Spring
					from={{ w: 0 }}
					to={{ w: 300 }}
					config={{ delay: 1700 }}
				>
					{(props) => {
						return (
							<animated.div
								className="z-1"
								style={{
									width: `calc(100% - ${props.w}px)`,
								}}
							>
								<ProjectSingle
									featured={true}
									options={slideshowOptions}
								/>
							</animated.div>
						);
					}}
				</Spring>
			</PageDiv>
		);
	}
}

export default compose(withApollo, withBreakpoints)(Home);

const PageDiv = styled.div`
	display: flex;
	justify-content: end;
	${(props) => props.status === "entering" && `z-index: -2;`}
	${(props) =>
		(props.status === "exiting" || props.status === "exited") &&
		`z-index: -2;`}
`;
