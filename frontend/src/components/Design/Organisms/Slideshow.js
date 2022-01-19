import React, { Component, useState, useEffect, createContext } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// components
import Loader from "../Atoms/Loader";
import Slide from "../Molecules/Slide";
import ProjectTitle from "../Molecules/ProjectTitle";
import SlideControls from "../Molecules/SlideControls";

// functions
import { ScrollHeroContext } from "../../Functional/ScrollHeroCheck";

export const SlideshowContext = createContext();
export const SlideshowProvider = (props) => {
	let [slideIndex, setIndex] = useState(0);
	const { status } = props;
	return (
		<SlideshowContext.Provider
			value={{
				props: props.options,
				status: status,
				slideIndex: slideIndex,
				addIndex: (slideNum) =>
					setIndex(slideIndex === slideNum ? 0 : slideIndex + 1),
				subtractIndex: (slideNum) =>
					setIndex(slideIndex === 0 ? slideNum : slideIndex - 1),
				resetIndex: () => setIndex(slideIndex - slideIndex),
				setToEnd: (slideNum) => setIndex(slideNum),
				switchToIndex: (thumbNum) => setIndex(thumbNum),
			}}
		>
			{props.children}
		</SlideshowContext.Provider>
	);
};

class Slideshow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slides: [],
			currentSlide: 0,
			totalSlides: 0,
			milliseconds: 0,
			slideDuration: 0,
			percentage: 0,
			timeLeft: 0,
			isPaused: false,
		};
	}

	componentDidMount() {
		this.slideShowTimer();
	}

	componentDidUpdate(prevProps) {
		this.handlePause(prevProps);
	}

	componentWillUnmount() {
		clearInterval(this.counterId);
		this.pauseSlide();
		this.setState({
			slides: [],
			currentSlide: 0,
			totalSlides: 0,
			milliseconds: 0,
			slideDuration: 0,
			percentage: 0,
			timeLeft: 0,
			isPaused: false,
		});
	}

	slideShowTimer = () => {
		let { milliseconds, slideDuration, timeLeft } = this.state;
		const { isPaused } = this.state;
		const { slideshowTimer } = this.context.props;
		slideDuration = slideshowTimer * 1000; // want to subtract one step from the final duration
		if (!isPaused) {
			timeLeft = slideDuration - milliseconds;
		}
		this.setState({ slideDuration, timeLeft }, () => {
			this.startSlide();
		});
	};

	startSlide = () => {
		const { slideDuration, timeLeft } = this.state;
		const { slideshowTimer } = this.context.props;
		let { slideIndex } = this.context;
		this.setState({ isPaused: false });
		let counterStep = timeLeft / slideshowTimer / 10; // subtracting timer so it'll be base 0
		let offset = 1.5; // just to give an inch past the finishline
		let lastCounterStep = (slideshowTimer / 10) * offset;
		let countTime = counterStep - lastCounterStep; // subtracting 1 step from counttime so it'll show 100% completion
		this.counterId = setInterval(() => {
			let { milliseconds, percentage, currentSlide, totalSlides } =
				this.state;
			let { slides, isSingleEntity } = this.props;
			totalSlides = isSingleEntity
				? slides.slideImages.length - 1
				: slides.length - 1;

			// make sure to reset the the counter if the slide was changed
			milliseconds =
				currentSlide !== this.context.slideIndex ? 0 : milliseconds;
			// make sure to reset index to 0 or to max with these checks
			this.context.slideIndex > totalSlides && this.context.resetIndex();
			this.context.slideIndex < 0 && this.context.setToEnd(totalSlides);
			if (milliseconds >= slideDuration) {
				milliseconds = 0;
				this.context.slideIndex > totalSlides
					? this.context.resetIndex()
					: this.context.addIndex(totalSlides);
			}

			percentage = (milliseconds * 100) / slideDuration;
			milliseconds += counterStep;

			this.setState({
				milliseconds,
				percentage,
				currentSlide: this.context.slideIndex,
				totalSlides,
			});
		}, countTime);
	};

	pauseSlide = () => {
		const { slideDuration, milliseconds } = this.state;
		let { timeLeft } = this.state;
		timeLeft = slideDuration - milliseconds;
		this.setState({ timeLeft });
		clearInterval(this.counterId);
		this.setState({ isPaused: true });
	};

	handlePause = (prevProps) => {
		if (prevProps.scroll !== this.props.scroll) {
			if (this.props.scroll !== "hero") {
				this.pauseSlide();
			} else {
				this.slideShowTimer();
			}
		}
	};

	render() {
		const { percentage, isPaused, totalSlides } = this.state;
		const { slideIndex, status } = this.context;
		const { transitionSpeed } = this.context.props;
		const { slides, isSingleEntity, contentType } = this.props;

		const slideControlVariants = {
			moveIn: {
				y: `0%`,
				transition: { delay: 0.3 },
			},
			moveOut: {
				y: "150%",
				transition: { delay: 0.0 },
			},
		};

		const titleVariants = {
			moveIn: {
				x: `0%`,
				opacity: 1,
				transition: { type: "tween", duration: 1, delay: 0.25 },
			},
			moveOut: {
				x: "10%",
				opacity: 0,
				transition: { type: "tween", duration: 1, delay: 0.0 },
			},
		};
		if (slides === undefined) return <Loader />;
		return (
			<SlideshowComponent>
				<div
					className={`slide-container ${isSingleEntity && "single"}`}
				>
					{isSingleEntity ? (
						<>
							<div
								className={`${
									contentType === "gallery"
										? "slide-wrap"
										: ""
								}`}
							>
								{slides.slideImages.map((image, i) => {
									return (
										<Slide
											key={image.id}
											location={
												slides.additionalProjectDetails
													.location
											}
											img={image}
											transitionSpeed={transitionSpeed}
											active={i === slideIndex}
											className={
												i === slideIndex
													? "activeSlide"
													: ""
											}
											isSingleEntity={isSingleEntity}
										/>
									);
								})}
							</div>
							<AnimatePresence>
								{status === "entered" && (
									<SlideControlContainer
										className={`${contentType}`}
										variants={slideControlVariants}
										initial={{
											y: `150%`,
										}}
										animate="moveIn"
										exit="moveOut"
									>
										<SlideControls
											total={totalSlides}
											contentType={contentType}
											images={
												contentType === "gallery"
													? slides.slideImages
													: ""
											}
										/>
									</SlideControlContainer>
								)}
							</AnimatePresence>
							<AnimatePresence>
								{status === "entered" && (
									<ProjectTitleContainer
										variants={titleVariants}
										initial={{
											x: `10%`,
											opacity: 0,
										}}
										animate="moveIn"
										exit="moveOut"
									>
										<ProjectTitle
											title={slides.title}
											subtitle={`${slides.date.slice(
												0,
												4
											)} ${
												slides?.additionalProjectDetails
													?.location?.city !==
													undefined ||
												slides?.additionalProjectDetails
													?.location?.stateShort !==
													undefined
													? ", "
													: ""
											} ${
												slides?.additionalProjectDetails
													?.location?.city !==
												undefined
													? slides
															?.additionalProjectDetails
															?.location?.city +
													  ", "
													: ""
											} ${
												slides?.additionalProjectDetails
													?.location?.stateShort !==
												undefined
													? slides
															?.additionalProjectDetails
															?.location
															?.stateShort
													: ""
											}`}
										/>
									</ProjectTitleContainer>
								)}
							</AnimatePresence>
						</>
					) : (
						<ScrollHeroContext.Consumer>
							{(context) =>
								slides.map((slide, i) => {
									return (
										<Slide
											key={slide.node.id}
											title={slide.node.title}
											date={slide.node.date}
											location={
												slide.node
													.additionalProjectDetails
													.location
											}
											img={
												slide.node.featuredImage.node
													.sourceUrl
											}
											status={status}
											percentage={percentage}
											isPaused={isPaused}
											titleAttachClass={context}
											transitionSpeed={transitionSpeed}
											active={i === slideIndex}
											className={
												i === slideIndex
													? "activeSlide"
													: ""
											}
										/>
									);
								})
							}
						</ScrollHeroContext.Consumer>
					)}
				</div>
			</SlideshowComponent>
		);
	}
}

export default Slideshow;

Slideshow.contextType = SlideshowContext;

const SlideControlContainer = styled(motion.div)`
	position: absolute;
	z-index: 3;
	bottom: 0;
	&.gallery {
		position: relative;
		width: 100%;
		justify-content: center;
		@media all and (max-width: 768px) {
			position: absolute;
			bottom: 0%;
		}
	}
`;

const ProjectTitleContainer = styled(motion.div)`
	position: absolute;
	z-index: 1;
	top: 0;
	right: 0;
	display: flex;
	min-width: 500px;
	padding: 0px 0;
	text-align: center;
	justify-content: end;
	@media all and (max-width: 767px) {
		min-width: initial;
		width: 100%;
	}
`;

const SlideshowComponent = styled.div`
	width: 100%;
	height: 100%;
	.slide-container {
		position: relative;
		width: 100%;
		height: 100vh;
		&.single {
			height: calc(100vh - 153px);
		}
		.slide-wrap {
			position: relative;
			height: 70vh;
		}
	}
`;
