import React, { Component } from "react";
import styled from "styled-components";

// components
import Arrow from "../Atoms/Arrow";
import SlideMeter from "../Atoms/SlideMeter";

class ProjectTitle extends Component {
	render() {
		const {
			title,
			subtitle,
			slideTitle,
			percentage,
			attachmentClass,
			active,
		} = this.props;
		return (
			<ProjectTitleDiv
				className={`project-title ${
					slideTitle ? "slideTitle" : "regularTitle"
				} ${attachmentClass}`}
			>
				{slideTitle ? (
					<div className="scroll-indicator">
						<small className="help-text">
							<i>Scroll to view</i>
						</small>
						<Arrow num={3} direction="down" color="#000" animate />
					</div>
				) : (
					""
				)}
				<div className="title-stack">
					<h1>{title}</h1>
					<SlideMeter progress={active ? percentage : undefined} />
					<h2>
						<i>{subtitle}</i>
					</h2>
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
	text-align: center;
	justify-content: end;
	&.slideTitle {
		top: calc(100% - 130px);
	}
	&.regularTitle {
		top: 0;
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0.04) 0%,
			rgba(255, 255, 255, 0.75) 50%
		);
	}
	&.hero {
		position: fixed;
		.scroll-indicator {
			background: rgba(255, 255, 255, 1);
			* {
				opacity: 1;
			}
		}
	}
	&.floating {
		position: fixed;
	}
	&.feature {
		position: absolute;
		top: 100%;
		bottom: initial;
		.title-stack {
			h2 {
				opacity: 1;
				max-height: 80px;
				margin: 0.5em 0;
			}
		}
		.slide-meter {
			&:after {
				width: 100%;
			}
		}
	}
	.scroll-indicator {
		display: flex;
		width: 120px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: rgba(255, 255, 255, 0.5);
		transition: 0.25s;
		* {
			opacity: 0;
			transition: 0.25s;
		}
		.help-text {
			margin-bottom: 1em;
		}
	}
	.title-stack {
		display: flex;
		flex-direction: column;
		align-content: center;
		min-width: 343px;
		padding: 1.5em 3em;
		background: rgb(255, 255, 255);
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
		font-size: 1.1em;
		font-family: "Roboto", serif;
		font-weight: 300;
		color: #707070;
		transition: opacity 0.75s, max-height 0.25s;
		opacity: 0;
		margin: 0;
		max-height: 0px;
		overflow: hidden;
	}
`;
