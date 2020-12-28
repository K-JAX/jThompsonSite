import React, { Component } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { Parser as HtmlToReactParser } from "html-to-react";
import { Helmet } from "react-helmet";

// Functions
import {
	SINGLE_PROJ_QUERY,
	FEATURED_PROJ_QUERY,
} from "../../Functional/queries";

// Components
import Hero from "../Organisms/Hero";
import Loader from "../Atoms/Loader";

/**
 * Fetch and display a Page
 */
class ProjectSingle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projectPost: {
				tite: "",
				slug: "",
				date: "",
				featured: false,
				location: "",
				budget: "",
				projectSummary: "",
				content: "",
				additionalProjectDetails: {},
				featuredImage: {},
			},
			parsedContent: "",
			citySt: "",
			year: "",
			img: "",
			// types: [],
			// materials: [],
			// styles: [],
			isSingle: true,
			isLoaded: false,
		};
	}

	componentDidUpdate(prevProps) {
		const { props } = this;
		if (
			typeof props.match !== "undefined" &&
			props.match.params.slug !== prevProps.match.params.slug
		) {
			this.executeProjectQuery();
		}
	}

	render() {
		const {
			projectPost,
			citySt,
			year,
			img,
			isLoaded,
			pauseSlides,
			parsedContent,
			fetchedMoreData,
			isSingle,
		} = this.state;
		const { title } = projectPost;
		const { featuredSlideshow } = this.props;
		if (!isLoaded) {
			return <Loader />;
		}

		console.log(data);

		return (
			<ProjectMain>
				<Helmet>
					<title>{title}</title>
				</Helmet>
				<Hero
					data={data}
					slider={sliderSpeed}
					transitionSpeed={transitionSpeed}
					pause={false}
					isSingle={isSingle}
				/>
			</ProjectMain>
		);
	}
}

export default ProjectSingle;

const ProjectMain = styled.main`
	position: relative;
`;
