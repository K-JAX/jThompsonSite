import React, { Component } from "react";
import styled from "styled-components";
import ProjectTitle from "./ProjectTitle";
import PropTypes from "prop-types";

class Slide extends Component {
	render() {
		if (this.props === undefined) return <p>Loading</p>;

		const {
			title,
			date,
			location,
			img,
			active,
			className,
			percentage,
			isSingleEntity,
			transitionSpeed,
			titleAttachClass,
		} = this.props;
		const { sourceUrl, srcSet } = img;
		if (isSingleEntity) {
			return (
				<>
					<SlideComponent
						className={className}
						transitionSpeed={transitionSpeed}
					>
						<img
							alt={`${title} project slide image.`}
							src={img.sourceUrl}
							srcSet={img.srcSet}
						/>
					</SlideComponent>
				</>
			);
		}
		return (
			<SlideComponent
				className={className}
				img={img}
				transitionSpeed={transitionSpeed}
			>
				<ProjectTitle
					title={title}
					subtitle={`${date.slice(0, 4)}, ${
						location && location.city
					}, ${location && location.stateShort}`}
					type="slideTitle"
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
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	transition: ${(props) => props.transitionSpeed / 10}s;
	&.activeSlide {
		opacity: 1;
		z-index: 1;
	}
`;
