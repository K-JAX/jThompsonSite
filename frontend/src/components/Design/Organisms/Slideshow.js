import React, { Component, useState, useEffect, createContext } from "react";
import styled from "styled-components";

// components
import Loader from "../Atoms/Loader";
import Slide from "../Molecules/Slide";
import ProjectTitle from "../Molecules/ProjectTitle";
import { ScrollHeroContext } from "../../Functional/ScrollHeroCheck";
import { SlideControls } from "../Molecules/SlideControls";

export const SlideshowContext = createContext();
export const SlideshowProvider = (props) => {
	const [slideIndex, setIndex] = useState(0);
	return (
		<SlideshowContext.Provider
			value={{
				props: props.options,
				slideIndex: slideIndex,
				addIndex: () => setIndex(slideIndex + 1),
				removeIndex: () => setIndex(slideIndex - 1),
				resetIndex: () => setIndex(slideIndex - slideIndex),
				setToEnd: (slideNum) => setIndex(slideNum),
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
			let {
				milliseconds,
				percentage,
				currentSlide,
				totalSlides,
			} = this.state;
			let { slides, isSingleEntity } = this.props;
			totalSlides = isSingleEntity
				? slides.slideImages.length - 1
				: slides.length - 1;

			// make sure to reset the the counter if the slide was changed
			milliseconds =
				currentSlide !== this.context.slideIndex ? 0 : milliseconds;

			if (milliseconds >= slideDuration) {
				milliseconds = 0;
				this.context.slideIndex > totalSlides
					? this.context.resetIndex()
					: this.context.addIndex();
			}

			// make sure to reset index to 0 or to max with these checks
			this.context.slideIndex > totalSlides && this.context.resetIndex();
			this.context.slideIndex < 0 && this.context.setToEnd(totalSlides);

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
		const { slideIndex } = this.context;
		const { transitionSpeed } = this.context.props;
		const { slides, isSingleEntity } = this.props;
		if (slides === undefined) return <Loader />;

		return (
			<SlideshowComponent>
				<div className="slide-container">
					{isSingleEntity ? (
						<>
							{" "}
							{slides.slideImages.map((image, i) => {
								return (
									<Slide
										key={image.id}
										location={
											slides.additionalProjectDetails
												.location
										}
										img={image.sourceUrl}
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
							<SlideControls total={totalSlides} />
							<ProjectTitle
								title={slides.title}
								subtitle={`${slides.date.slice(0, 4)}, ${
									slides.additionalProjectDetails.location
										.city
								}, ${
									slides.additionalProjectDetails.location
										.stateShort
								}`}
							/>
						</>
					) : (
						slides.map((slide, i) => {
							return (
								<ScrollHeroContext.Consumer>
									{(context) => (
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
									)}
								</ScrollHeroContext.Consumer>
							);
						})
					)}
				</div>
			</SlideshowComponent>
		);
	}
}

export default Slideshow;

Slideshow.contextType = SlideshowContext;

const SlideshowComponent = styled.div`
	width: 100%;
	height: 100%;
	.slide-container {
		position: relative;
		width: 100%;
		height: 100vh;
	}
`;
