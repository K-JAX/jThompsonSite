import React, { Component } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";
import { FEATURED_PROJ_QUERY, SINGLE_PROJ_QUERY } from "./queries";

const withProjectData = (WrappedComponent, propObj) => {
	class HOC extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				data: [],
				isLoaded: false,
			};
		}

		componentDidMount() {
			// console.log(propObj);
			this.executeProjectQuery();
		}

		executeProjectQuery = async () => {
			let query =
				WrappedComponent.name === "ProjectFeatures"
					? FEATURED_PROJ_QUERY
					: SINGLE_PROJ_QUERY;
			this.makeQuery(query);
		};

		makeQuery = async (query) => {
			const { client } = this.props;
			const result = await client.query({
				query: query,
			});
			const data = result.data.projects;
			this.setState({ data, isLoaded: true });
			// this.fixData();
		};

		fixData = () => {
			this.abbreviateCityState();
			this.getYear();
			this.getFeaturedImg();
		};

		abbreviateCityState = () => {
			const { projectPost } = this.state;
			this.setState({
				citySt: `${projectPost.additionalProjectDetails.location.city}, ${projectPost.additionalProjectDetails.location.stateShort}`,
			});
		};

		getYear = () => {
			const { projectPost } = this.state;
			this.setState({ year: projectPost.date.slice(0, 4) });
		};

		getFeaturedImg = () => {
			const { projectPost } = this.state;
			this.setState({
				img:
					projectPost.featuredImage === null
						? "https://via.placeholder.com/1920x1200"
						: projectPost.featuredImage.node.sourceUrl,
			});
		};

		render() {
			const { data } = this.state;
			const { sliderSpeed, transitionSpeed } = propObj;
			return sliderSpeed !== undefined ? (
				<WrappedComponent
					data={data}
					sliderSpeed={sliderSpeed}
					transitionSpeed={transitionSpeed}
				/>
			) : (
				<WrappedComponent data={data} />
			);
		}
	}
	return withApollo(HOC);
};
export default withProjectData;

const ProjectMain = styled.main`
	position: relative;
`;
