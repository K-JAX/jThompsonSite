import React, { Component } from "react";
import styled from "styled-components";

// components
import TripleArrow from "../Atoms/TripleArrow";
import SlideMeter from "../Atoms/SlideMeter";

class ProjectTitle extends Component {
	render() {
		const { title, subtitle, slideTitle, percentage } = this.props;
		return (
			<ProjectTitleDiv
				className={`project-title ${
					slideTitle ? "slideTitle" : "regularTitle"
				}`}
			>
				{slideTitle ? (
					<div className="scroll-indicator">
						<small className="help-text">
							<i>Scroll to view</i>
						</small>
						<TripleArrow direction="down" color="#000" animate />
					</div>
				) : (
					""
				)}
				<div className="title-stack">
					<h1>{title}</h1>
					<SlideMeter progress={percentage} />
					<h2 className="initial-hidden">{subtitle}</h2>
				</div>
			</ProjectTitleDiv>
		);
	}
}

export default ProjectTitle;

const ProjectTitleDiv = styled.div`
	position: absolute;
	right: 0;
	display: flex;
	min-width: 500px;
	padding: 0px 0;
	padding-right: 2rem;
	text-align: center;
	background: rgb(255, 255, 255);
	justify-content: space-between;
	&.slideTitle {
		bottom: 0;
	}
	&.regularTitle {
		top: 0;
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0.04) 0%,
			rgba(255, 255, 255, 0.75) 50%
		);
	}
	.scroll-indicator {
		display: flex;
		width: 120px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.help-text {
			opacity: 0.65;
			margin-bottom: 1em;
		}
	}
	.title-stack {
		display: flex;
		flex-direction: column;
		align-content: center;
		padding: 1.5em 0;
	}
	h1,
	h2 {
		display: inline-block;
	}
	h1 {
		position: relative;
		margin: 1rem 0;
		font-size: 38px;
		font-weight: 100;
	}
	h2 {
		opacity: 0.6;
		font-family: "Roboto", serif;
		font-weight: 100;
		&.initial-hidden {
			display: none;
		}
	}
`;
