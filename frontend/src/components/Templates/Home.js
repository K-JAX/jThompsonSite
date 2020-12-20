import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";

// Components
import ProjectSingle from "./Project-Single";

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
			}
		}
	}
`;

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slideshowTimer: 0,
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
			isLoaded: true,
		});
	};

	render() {
		const { isLoaded, slideshowTimer } = this.state;
		if (!isLoaded) {
			return <p>Loading</p>;
		}
		return (
			<div style={{ marginLeft: "315px" }}>
				<div className="">
					<ProjectSingle featuredSlideshow={slideshowTimer} />
				</div>
			</div>
		);
	}
}

export default withApollo(Home);
