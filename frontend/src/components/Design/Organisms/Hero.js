import React, { Component } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";
import ProjectTitle from "../Molecules/ProjectTitle";
import Slideshow from "./Slideshow";
import PropTypes from "prop-types";

// Components
import { ScrollHeroContext } from "../../Functional/ScrollHeroCheck";

class Hero extends Component {
	render() {
		const { data, isSingle, isSlider } = this.props;
		// let isSlider = !isSingle ? true : false;
		// console.log(slides);
		if (isSlider) {
			return (
				<>
					<ScrollHeroContext.Consumer>
						{(context) => {
							return (
								<HeroSection
									className="hero-section"
									isSlider={isSlider}
								>
									<Slideshow
										slides={data}
										scroll={context}
										isSingleEntity={isSingle}
									/>
								</HeroSection>
							);
						}}
					</ScrollHeroContext.Consumer>
				</>
			);
		} else {
			const { title, date, location } = data.project;
			return (
				<div className="project-title">
					<h1>{title}asdf</h1>
					<h2>
						{date}
						<i>{location}</i>
					</h2>
				</div>
			);
		}
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

Hero.propTypes = {
	isSingle: PropTypes.bool,
	isSlider: PropTypes.bool,
};

Hero.defaultProps = {
	isSingle: true,
	isSlider: false,
};
