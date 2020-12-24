import React, { Component } from "react";
import styled from "styled-components";
import ProjectTitle from "./ProjectTitle";

class Slide extends Component {
	render() {
		const {
			title,
			date,
			location,
			img,
			active,
			className,
			percentage,
			transitionSpeed,
			isPaused,
			titleAttachClass,
		} = this.props;

		return (
			<SlideComponent
				className={className}
				img={img}
				transitionSpeed={transitionSpeed}
			>
				<ProjectTitle
					title={title}
					subtitle={`${date.slice(0, 4)}, ${location.city}, ${
						location.stateShort
					}`}
					slideTitle
					active={active}
					attachmentClass={titleAttachClass}
					percentage={percentage}
				/>
			</SlideComponent>
		);
	}
}

export default Slide;

const SlideComponent = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	overflow-y: visible;
	background: url(${(props) => props.img}) center / cover no-repeat;
	opacity: 0;
	transition: ${(props) => props.transitionSpeed / 10}s;
	&.activeSlide {
		opacity: 1;
		z-index: 1;
	}
`;
