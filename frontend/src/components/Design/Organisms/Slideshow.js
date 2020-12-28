import React, { Component } from "react";
import styled from "styled-components";
import Slide from "../Molecules/Slide";
import { Parser as HtmlToReactParser } from "html-to-react";

// components
import ProjectContent from "./ProjectContent";
import Loader from "../Atoms/Loader";

class Slideshow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slides: [],
			slideIndex: 0,
			milliseconds: 0,
			slideDuration: 0,
			percentage: 0,
			timeLeft: 0,
			fetchedMoreData: false,
			gallery_or_descriptive: "gallery",
			isPaused: false,
			titleAttachClass: "hero",
			parsedContent: "",
			showStatBox: false,
			stats: {
				materials: [],
				types: [],
				styles: [],
				colors: {},
			},
			featuredImages: [],
		};
	}

	componentDidMount() {
		this.slideShowTimer();
		window.addEventListener("scroll", this.handleScroll);
	}

	componentDidUpdate(prevProps) {
		this.handlePause(prevProps);
	}

	componentWillUnmount() {
		clearInterval(this.counterId);
		window.removeEventListener("scroll", this.handleScroll);
	}

	slideShowTimer = () => {
		let { milliseconds, slideDuration, timeLeft } = this.state;
		const { isPaused } = this.state;
		const { timer } = this.props;
		slideDuration = timer * 1000; // want to subtract one step from the final duration
		if (!isPaused) {
			timeLeft = slideDuration - milliseconds;
		}
		this.setState({ slideDuration, timeLeft }, () => {
			this.startSlide();
		});
	};

	startSlide = () => {
		const { slideDuration, timeLeft } = this.state;
		const { timer } = this.props;
		this.setState({ isPaused: false });

		let counterStep = timeLeft / timer / 10; // subtracting timer so it'll be base 0

		let offset = 1.5; // just to give an inch past the finishline
		let lastCounterStep = (timer / 10) * offset;
		let countTime = counterStep - lastCounterStep; // subtracting 1 step from counttime so it'll show 100% completion
		this.counterId = setInterval(() => {
			let { milliseconds, percentage, slideIndex } = this.state;
			let { slides } = this.props;
			if (milliseconds >= slideDuration) {
				milliseconds = 0;
				slideIndex >= slides.length - 1
					? (slideIndex = 0)
					: slideIndex++;
				this.setState({ slideIndex });
			}
			percentage = (milliseconds * 100) / slideDuration;
			milliseconds += counterStep;
			// console.log(`${slideIndex}`);

			this.setState({ milliseconds, percentage });
		}, countTime);
	};

	pauseSlide = () => {
		const { slideDuration, milliseconds } = this.state;
		let { timeLeft } = this.state;
		timeLeft = slideDuration - milliseconds;
		this.setState({ timeLeft });
		// console.log(`Paused Slideshow. Time left is: ${timeLeft}ms`);
		clearInterval(this.counterId);
		this.setState({ isPaused: true });
	};

	handlePause = (prevProps) => {
		const { isPaused } = this.state;
		const { pause } = this.props;
		if (prevProps.pause !== pause) {
			// console.log(
			// 	`Current pause prop is ${pause} and current isPaused state is ${isPaused}`
			// );
			if (pause && !isPaused) {
				this.pauseSlide();
			} else {
				this.slideShowTimer();
			}
		}
	};

	handleScroll = () => {
		const { titleAttachClass, fetchedMoreData } = this.state;
		if (window.scrollY === 0) {
			this.setState({ pauseSlides: false, titleAttachClass: "hero" });
			this.slideShowTimer();
			this.removeExtraData();
		}
		if (window.scrollY > 0 && window.scrollY < 130) {
			if (titleAttachClass !== "floating") {
				this.setState({
					pauseSlides: true,
					titleAttachClass: "floating",
				});
			}
			if (!fetchedMoreData) {
				this.pauseSlide();
				this.getMoreData();
			}
		}
		if (window.scrollY >= 130) {
			if (titleAttachClass !== "feature") {
				this.setState({ titleAttachClass: "feature" });
			}
		}
	};

	getMoreData = () => {
		const { fetchedMoreData, slideIndex } = this.state;
		const { slides } = this.props;
		if (!fetchedMoreData) {
			var htmlToReactParser = new HtmlToReactParser();
			var reactElement = htmlToReactParser.parse(
				// this.state.projectPost.content
				slides[slideIndex].node.content
			);
			this.setState({
				fetchedMoreData: true,
				gallery_or_descriptive:
					slides[slideIndex].node.projectMainDetails
						.galleryOrDescriptive,
				summary: slides[slideIndex].node.projectSummary,
				parsedContent: reactElement,
				showStatBox:
					slides[slideIndex].node.additionalProjectDetails
						.showStatBox,
				stats: {
					materials: slides[slideIndex].node.materials,
					types: slides[slideIndex].node.types,
					styles: slides[slideIndex].node.styles,
					colors: slides[slideIndex].node.colorPalette,
				},
				featuredImages:
					slides[slideIndex].node.additionalProjectDetails
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
		const {
			slideIndex,
			percentage,
			fetchedMoreData,
			parsedContent,
			isPaused,
			titleAttachClass,
			showStatBox,
			stats,
			summary,
			gallery_or_descriptive,
			featuredImages,
		} = this.state;

		// const { title, date, location, img } = this.props;
		const { slides, isSingle, transitionSpeed } = this.props;
		if (slides === undefined) return <Loader />;

		return (
			<SlideshowComponent>
				<div className="slide-container">
					{slides.map((slide, i) => {
						return (
							<Slide
								key={slide.node.id}
								title={slide.node.title}
								date={slide.node.date}
								location={
									slide.node.additionalProjectDetails.location
								}
								img={slide.node.featuredImage.node.sourceUrl}
								percentage={percentage}
								isPaused={isPaused}
								titleAttachClass={titleAttachClass}
								transitionSpeed={transitionSpeed}
								active={i === slideIndex}
								className={
									i === slideIndex ? "activeSlide" : ""
								}
							/>
						);
					})}
				</div>

				{fetchedMoreData ? (
					<div className="project-content">
						<ProjectContent
							features={featuredImages}
							contentType={gallery_or_descriptive}
							summary={summary}
							isSingle={isSingle}
							showStatBox={showStatBox}
							stats={stats}
							content={parsedContent}
						/>
					</div>
				) : (
					""
				)}
			</SlideshowComponent>
		);
	}
}

export default Slideshow;

const SlideshowComponent = styled.div`
	width: 100%;
	height: 100%;
	.slide-container {
		position: relative;
		width: 100%;
		height: 100vh;
	}
`;
