import React, { Component } from "react";
import styled from "styled-components";
import ProjectTitle from "./ProjectTitle";

class Slide extends Component {
	render() {
		const { title, date, location, img, percentage } = this.props;
		return (
			<SlideComponent img={img}>
				<ProjectTitle
					title={title}
					subtitle={`${date} ${location}`}
					slideTitle
					percentage={percentage}
				/>
			</SlideComponent>
		);
	}
}

export default Slide;

const SlideComponent = styled.div`
	width: 100%;
	height: 100%;
	background: url(${(props) => props.img}) center / cover no-repeat;
`;
