import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { withApollo, useQuery } from "react-apollo";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

// components
import FullPageLoader from "../Molecules/FullPageLoader";
import ProjectBody from "../Organisms/ProjectBody";

// Functions
import {
	SINGLE_PROJ_QUERY,
	FEATURED_PROJ_QUERY,
} from "../../Functional/queries";
import {
	ScrollHeroContext,
	ScrollHeroProvider,
} from "../../Functional/ScrollHeroCheck";
import { EntryStatusProvider } from "../../Functional/EntryStatus";
import Slideshow, {
	SlideshowContext,
	SlideshowProvider,
} from "../Organisms/Slideshow";

export const ProjectSingle = (props) => {
	let { options, status } = props;
	const [isSingle, setIsSingle] = useState(
		props.featured === true ? false : true
	);
	let query = isSingle ? SINGLE_PROJ_QUERY : FEATURED_PROJ_QUERY;
	const { slug } = useParams();
	const { loading, error, data } = useQuery(query, { variables: { slug } });
	if (loading) return <FullPageLoader />;
	if (error) return `Error! ${error}`;

	let slideData;
	let slideshowOptions = {
		slideshowTimer: 4,
		transitionSpeed: 35,
	};
	let isSlider = true;
	if (isSingle) {
		slideshowOptions = {
			slideshowTimer: data.project.projectMainDetails.slideshowTimer,
			transitionSpeed: data.project.projectMainDetails.transitionSpeed,
		};
		let mainFeaturedImg = data.project?.featuredImage?.node;
		slideData = data.project;
		slideData.slideImages = data.project.additionalProjectDetails
			.featuredImages
			? data.project.additionalProjectDetails.featuredImages
			: [];
		if (
			mainFeaturedImg &&
			!slideData.slideImages.includes(mainFeaturedImg)
		) {
			slideData.slideImages.unshift(mainFeaturedImg);
		}
		if (data.project.projectMainDetails.showSlideshowOnProjectPage) {
			options = slideshowOptions;
		}
	} else {
		slideData = data.projects.edges;
	}

	return (
		<EntryStatusProvider status={status}>
			<SlideshowProvider options={options} status={status}>
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
		</EntryStatusProvider>
	);
};
export default ProjectSingle;

const ProjectMain = styled.main`
	position: relative;
	margin-bottom: 80px;
`;

ProjectSingle.propTypes = {
	featuredSlideshow: PropTypes.object,
};
