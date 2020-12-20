import React, { Component } from "react";
import styled from "styled-components";
import Slide from "../Molecules/Slide";

class Slideshow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slideIndex: 0,
			milliseconds: 0,
			slideDuration: 0,
			percentage: 0,
			timeLeft: 0,
			isPaused: false,
		};
	}

	componentDidMount() {
		this.slideShowTimer();
		window.addEventListener("scroll", this.handleScroll);
	}

	componentWillUnmount() {
		// const { intervalId } = this.state;
		window.removeEventListener("scroll", this.handleScroll);
		clearInterval(this.intervalId);
		clearInterval(this.counterId);
	}

	handleScroll = () => {
		// let scrollTop = event.srcElement.body.scrollTop;
		if (window.scrollY > 10) {
			this.pauseSlide();
		}
		if (window.scrollY === 0) {
			// console.log("deciding how to restart the slideshow");
			// this.slideShowTimer();
			const { timeLeft } = this.state;
			this.slideShowTimer();
		}
	};

	slideShowTimer = () => {
		let { milliseconds, slideDuration, timeLeft } = this.state;
		const { isPaused } = this.state;
		const { timer } = this.props;
		slideDuration = timer * 1000; // want to subtract one step from the final duration
		if (!isPaused) {
			timeLeft = slideDuration - milliseconds;
		}
		console.log(timeLeft);
		this.setState({ slideDuration, timeLeft }, () => {
			// if (!isPaused) {
			this.startSlide();
			// }
			this.intervalId = setInterval(() => {
				this.startSlide();
			}, timeLeft);
		});
	};

	startSlide = () => {
		const { slideDuration, isPaused } = this.state;
		let { slideIndex, milliseconds, timeLeft } = this.state;
		if (!isPaused) {
			timeLeft = slideDuration - milliseconds;
		}
		// if (timeLeft < 1) {
		milliseconds = 0;
		slideIndex++;
		// }
		// console.log(
		// 	`Started slideshow. Time left on current slide is: ${timeLeft}`
		// );
		this.setState({ slideIndex, milliseconds }, () => {
			clearInterval(this.counterId);
			this.counter();
		});
	};

	pauseSlide = () => {
		const { slideDuration, milliseconds } = this.state;
		let { timeLeft } = this.state;
		timeLeft = slideDuration - milliseconds;
		this.setState({ timeLeft });
		console.log(`Paused Slideshow. Time left is: ${timeLeft}ms`);
		clearInterval(this.intervalId);
		clearInterval(this.counterId);
		this.setState({ isPaused: true });
	};

	counter = () => {
		const { slideDuration, milliseconds, isPaused } = this.state;
		let { timeLeft } = this.state;
		const { timer } = this.props;
		if (!isPaused) {
			timeLeft = slideDuration - milliseconds;
		}
		this.setState({ isPaused: true });
		let counterStep = timeLeft / timer / 10; // subtracting timer so it'll be base 0

		let offset = 1.5; // just to give an inch past the finishline
		let lastCounterStep = (timer / 10) * offset;
		let countTime = counterStep - lastCounterStep; // subtracting 1 step from counttime so it'll show 100% completion
		this.counterId = setInterval(() => {
			let { milliseconds, percentage } = this.state;
			percentage = (milliseconds * 100) / slideDuration;
			milliseconds += counterStep;
			console.log(
				`Percentage is: ${this.state.percentage}% and timeLeft is ${
					slideDuration - milliseconds
				}`
			);
			this.setState({ milliseconds, percentage });
		}, countTime);
	};

	render() {
		const { percentage } = this.state;
		const { title, date, location, img } = this.props;
		return (
			<SlideshowComponent>
				<Slide
					title={title}
					date={date}
					location={location}
					img={img}
					percentage={percentage}
				/>
			</SlideshowComponent>
		);
	}
}

export default Slideshow;

const SlideshowComponent = styled.div`
	width: 100%;
	height: 100%;
`;
