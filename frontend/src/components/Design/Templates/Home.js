import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";

// Components
import ProjectFeatures from "./Project-Features";
import withProjectData from "../../Functional/withProjectData";

/**
 * GraphQL page query
 * Gets page's title and content using slug as uri
 */
const HOME_QUERY = gql`
	query MyQuery {
		page(id: "home", idType: URI) {
			uri
			sliderTimer {
				slideshowTimer
				transitionSpeed
			}
		}
	}
`;

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slideshowTimer: 7,
			transitionSpeed: 0.3,
			isLoaded: false,
		};
	}

	componentDidMount() {
		this.executePageQuery();
	}

	executePageQuery = async () => {
		const { client } = this.props;
		const result = await client.query({
			query: HOME_QUERY,
		});
		this.setState({
			slideshowTimer: result.data.page.sliderTimer.slideshowTimer,
			transitionSpeed: result.data.page.sliderTimer.transitionSpeed,
			isLoaded: true,
		});
	};

	render() {
		const { isLoaded, slideshowTimer, transitionSpeed } = this.state;
		const ProjectwithData = withProjectData(ProjectFeatures, {
			sliderSpeed: slideshowTimer,
			transitionSpeed: transitionSpeed,
		});
		if (!isLoaded) {
			return "";
		}
		return (
			<div style={{ float: "right", width: "78%" }}>
				<div className="">
					{/* <ProjectSingle featuredSlideshow={slideshowTimer} /> */}
					<ProjectwithData />
				</div>
			</div>
		);
	}
}

export default withApollo(Home);
