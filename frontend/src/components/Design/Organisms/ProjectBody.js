import React, { Component } from "react";
import { Parser as HtmlToReactParser } from "html-to-react";
import PropTypes from "prop-types";

// components
import { SlideshowContext } from "../Organisms/Slideshow";
import Hero from "../Organisms/Hero";
import ProjectContent from "../Organisms/ProjectContent";
import { ScrollHeroContext } from "../../Functional/ScrollHeroCheck";
import { ProjectContext } from "../Templates/Project-Single";

class ProjectBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fetchedMoreData: false,
			galleryOrDescriptive: "gallery",
			summary: "",
			parsedContent: {},
			showStatBox: false,
			stats: {
				materials: [],
				types: [],
				styles: [],
				colors: [],
			},
			featuredImages: [],
		};
	}
	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.handleScrollChange();
		}
	}

	handleScrollChange = () => {
		const { scroll } = this.props.context;

		if (scroll === "top") {
			this.removeExtraData();
		} else {
			this.getMoreData();
		}
	};

	getMoreData = () => {
		const { fetchedMoreData } = this.state;
		// const { slideIndex } = this.context;
		const { data, isSingle, context } = this.props;
		const { slideshow, scroll } = context;
		const { slideIndex } = slideshow;

		if (!isSingle && !fetchedMoreData) {
			var htmlToReactParser = new HtmlToReactParser();
			var reactElement = htmlToReactParser.parse(
				data[slideIndex].node.content
			);
			this.setState({
				fetchedMoreData: true,
				gallery_or_descriptive:
					data[slideIndex].node.projectMainDetails
						.galleryOrDescriptive,
				summary: data[slideIndex].node.projectSummary,
				parsedContent: reactElement,
				showStatBox:
					data[slideIndex].node.additionalProjectDetails.showStatBox,
				stats: {
					materials: data[slideIndex].node.materials,
					types: data[slideIndex].node.types,
					styles: data[slideIndex].node.styles,
					colors: data[slideIndex].node.colorPalette,
				},
				featuredImages:
					data[slideIndex].node.additionalProjectDetails
						.featuredImages,
			});
		}
	};

	removeExtraData = () => {
		const { fetchedMoreData } = this.state;
		if (fetchedMoreData) {
			this.setState({
				fetchedMoreData: false,
				gallery_or_descriptive: "gallery",
				summary: "",
				parsedContent: "",
				showStatBox: false,
				stats: {
					materials: [],
					types: [],
					styles: [],
					colors: {},
				},
				featuredImages: [],
			});
		}
	};

	render() {
		const { data, isSingle, isSlider } = this.props;
		const {
			fetchedMoreData,
			gallery_or_descriptive,
			summary,
			parsedContent,
			showStatBox,
			stats,
			featuredImages,
		} = this.state;
		if (data === undefined) return <p>Loading</p>;
		return (
			<>
				<Hero data={data} isSingle={isSingle} isSlider={isSlider} />
				{isSingle ? (
					<ProjectContent
						contentType={gallery_or_descriptive}
						summary={summary}
						content={parsedContent}
						features={featuredImages}
						showStatBox={showStatBox}
						stats={stats}
						features={data.additionalProjectDetails.featuredImages}
						isSingle={isSingle}
					/>
				) : (
					fetchedMoreData && (
						<ProjectContent
							contentType={gallery_or_descriptive}
							summary={summary}
							content={parsedContent}
							features={featuredImages}
							showStatBox={showStatBox}
							stats={stats}
							isSingle={isSingle}
						/>
					)
				)}
			</>
		);
	}
}

export default ProjectBody;

// ProjectBody.contextType = ProjectContext;

// import React, { useContext } from "react";
// import { SlideshowContext } from "../Organisms/Slideshow";

// const ProjectBody = () => {
// 	const Slidestuff = useContext(SlideshowContext);
// 	return <p>{JSON.stringify(Slidestuff)}</p>;
// };

// export default ProjectBody;
