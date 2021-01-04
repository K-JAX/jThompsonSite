import React, { Component, memo, createContext, useContext } from "react";
import styled from "styled-components";
import { withApollo } from "react-apollo";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import isEqual from "react-fast-compare";

// Functions
import {
	SINGLE_PROJ_QUERY,
	FEATURED_PROJ_QUERY,
} from "../../Functional/queries";

// Components
import Loader from "../Atoms/Loader";
import {
	ScrollHeroContext,
	ScrollHeroProvider,
} from "../../Functional/ScrollHeroCheck";
import Slideshow, {
	SlideshowContext,
	SlideshowProvider,
} from "../Organisms/Slideshow";
import ProjectBody from "../Organisms/ProjectBody";

/**
 * Project Single Template
 */
class ProjectSingle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			slideData: [],
			isSingle: true,
			isLoaded: false,
			slideshowOptions: {
				slideshowTimer: 4,
				transitionSpeed: 35,
			},
		};
	}

	componentDidMount() {
		this.executeProjectQuery();
	}

	componentDidUpdate(prevProps) {
		const { props } = this;
		if (
			props.match !== undefined &&
			props.match.params.slug !== prevProps.match.params.slug
		) {
			this.executeProjectQuery();
		}
	}

	componenWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	executeProjectQuery = async () => {
		const { props } = this;

		let query =
			props.featured === true ? FEATURED_PROJ_QUERY : SINGLE_PROJ_QUERY;
		this.makeQuery(query);
	};

	makeQuery = async (query) => {
		const { match, client, featured, options } = this.props;
		let slug;

		if (featured === undefined && match !== undefined) {
			slug = match.params.slug;
		}

		const result = await client.query({
			query: query,
			variables: { slug },
		});
		const data = result.data;

		// Find whether or not its a single or array or projects
		let isSingle = Object.keys(data)[0] === "project" ? true : false;
		this.setState({ data, isSingle });

		this.cleanData();
	};

	cleanData = () => {
		const { data, isSingle, options } = this.state;
		let { slideData } = this.state;
		if (isSingle) {
			this.setState({
				slideshowOptions: {
					slideshowTimer:
						data.project.projectMainDetails.slideshowTimer,
					transitionSpeed:
						data.project.projectMainDetails.transitionSpeed,
				},
			});
			slideData = data.project;
			slideData.slideImages =
				data.project.additionalProjectDetails.featuredImages;
			slideData.slideImages.unshift(data.project.featuredImage.node);
		} else {
			slideData = data.projects.edges;
		}
		this.setState({ slideData, isLoaded: true });
	};

	render() {
		const { slideData, data, isSingle, isLoaded } = this.state;
		let { options } = this.props;

		if (isLoaded !== true) {
			return <Loader />;
		}

		let isSlider = true;
		if (isSingle) {
			if (data.project.projectMainDetails.showSlideshowOnProjectPage) {
				options = this.state.slideshowOptions;
			}
			isSlider = data.project.projectMainDetails
				.showSlideshowOnProjectPage
				? true
				: false;
		}
		return (
			<SlideshowProvider options={options}>
				<ProjectMain>
					{isSingle && (
						<Helmet>
							<title>{data.project.title}</title>
						</Helmet>
					)}
					<ScrollHeroProvider>
						<SlideshowContext.Consumer>
							{(slideshow) => (
								<ScrollHeroContext.Consumer>
									{(scroll) => (
										<ProjectBody
											data={slideData}
											isSingle={isSingle}
											isSlider={isSlider}
											context={{ slideshow, scroll }}
										/>
									)}
								</ScrollHeroContext.Consumer>
							)}
						</SlideshowContext.Consumer>
					</ScrollHeroProvider>
				</ProjectMain>
			</SlideshowProvider>
		);
	}
}

export default withApollo(ProjectSingle);

const ProjectMain = styled.main`
	position: relative;
`;

ProjectSingle.propTypes = {
	featuredSlideshow: PropTypes.object,
};
