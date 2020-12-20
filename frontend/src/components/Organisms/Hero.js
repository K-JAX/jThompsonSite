import React, { Component } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";
import Slideshow from "./Slideshow";

class Hero extends Component {
	render() {
		const { captionTitle, date, location, img, slider } = this.props;
		// console.log(typeof slider === "number");
		return (
			<HeroSection className="hero-section">
				{typeof slider === "number" ? (
					<Slideshow
						title={captionTitle}
						date={date}
						location={location}
						img={img}
						timer={slider}
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
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	overflow: hidden;
	&.hero-section {
		/* override whatever grid properties inherited */
		grid-template-columns: 100%;
	}
`;
