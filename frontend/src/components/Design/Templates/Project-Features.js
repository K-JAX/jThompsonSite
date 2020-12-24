import React, { Component } from "react";
import styled from "styled-components";
import { Parser as HtmlToReactParser } from "html-to-react";

// Components
import Hero from "../Organisms/Hero";

class ProjectFeatures extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pauseSlides: false,
			isLoaded: false,
		};
	}



	render() {
		const { data, sliderSpeed, transitionSpeed } = this.props;

		return (
			<ProjectMain>
				<Hero
					captionTitle={`title`}
					date={`year`}
					location={`citySt`}
					img={`img`}
					data={data}
					slider={sliderSpeed}
					transitionSpeed={transitionSpeed}
					pause={false}
				/>
				
			</ProjectMain>
		);
	}
}

export default ProjectFeatures;

const ProjectMain = styled.main`
	position: relative;
`;
