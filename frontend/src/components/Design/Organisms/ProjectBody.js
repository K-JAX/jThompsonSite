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

	componentDidMount() {
		const { isSingle } = this.props;
		if (isSingle) {
			this.getMoreData();
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.handleScrollChange();
		}
	}

	handleScrollChange = () => {
		const { isSingle } = this.props;
		const { scroll } = this.props.context;
		if (!isSingle) {
			if (scroll === "hero") {
				this.removeExtraData();
			} else {
				this.getMoreData();
			}
		}
	};

	getMoreData = () => {
		const { fetchedMoreData } = this.state;
		// const { slideIndex } = this.context;
		const { data, isSingle, context } = this.props;
		const { slideshow, scroll } = context;
		const { slideIndex } = slideshow;

		let dataItem;
		if (isSingle) {
			dataItem = data;
		} else {
			dataItem = data[slideIndex].node;
		}

		if (!fetchedMoreData) {
			var htmlToReactParser = new HtmlToReactParser();
			var reactElement = htmlToReactParser.parse(dataItem.content);
			this.setState({
				fetchedMoreData: true,
				gallery_or_descriptive:
					dataItem.projectMainDetails.galleryOrDescriptive,
				summary: dataItem.projectSummary,
				parsedContent: reactElement,
				showStatBox: dataItem.additionalProjectDetails.showStatBox,
				stats: {
					materials: dataItem.materials,
					types: dataItem.types,
					styles: dataItem.styles,
					colors: dataItem.colorPalette,
				},
				featuredImages:
					dataItem.additionalProjectDetails.featuredImages,
			});
		}
	};

	removeExtraData = () => {
		const { fetchedMoreData } = this.state;
		if (fetchedMoreData) {
			this.setState({
				fetchedMoreData: false,
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
				<Hero
					data={data}
					isSingle={isSingle}
					isSlider={isSlider}
					contentType={gallery_or_descriptive}
				/>
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
