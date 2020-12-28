import React, { Component } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";
import ProjectTitle from "../Molecules/ProjectTitle";
import Slideshow from "./Slideshow";

class Hero extends Component {
	render() {
		const {
			captionTitle,
			date,
			location,
			img,
			slider,
			pause,
			data,
			isSingle,
			transitionSpeed,
		} = this.props;

		const isSlider = typeof slider === "number" ? true : false;
		return (
			<HeroSection className="hero-section" isSlider={isSlider}>
				{isSlider ? (
					<Slideshow
						slides={data.edges}
						isSingle={isSingle}
						timer={slider}
						transitionSpeed={transitionSpeed}
						pause={pause}
					/>
				) : (
					<div className="project-title">
						<h1>{captionTitle}</h1>
						<h2>
							{date}
							<i>{location}</i>
						</h2>
					</div>
				)}
			</HeroSection>
		);
	}
}

export default withApollo(Hero);

const HeroSection = styled.section`
	display: flex;
	position: relative;
	width: 100%;
	height: ${(props) => (props.isSlider ? "auto" : "100vh")};
	background-repeat: no-repeat;
	background-size: cover;
	/* overflow: hidden; */
	&.hero-section {
		/* override whatever grid properties inherited */
		grid-template-columns: 100%;
	}
`;
