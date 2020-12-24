import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";

/**
 * GraphQL page query that takes a page slug as a uri
 * Returns the title and content of the page
 */
const PAGE_QUERY = gql`
	query PageQuery {
		pageBy(uri: "about") {
			title
			content
		}
	}
`;

const PROJ_QUERY = gql`
	query ProjectQuery {
		teamMembers {
			edges {
				node {
					title
					uri
					link
					content
					featuredImage {
						srcSet
						sourceUrl
					}
				}
			}
		}
	}
`;

/**
 * Fetch and display a Page
 */
class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: {
				title: "",
				content: "",
			},
			teamMembers: [],
		};
	}

	componentDidMount() {
		this.executePageQuery();
		this.executeProjectTypeQuery();
	}

	componentDidUpdate(prevProps) {
		const { props } = this;
		if (props.match.params.slug !== prevProps.match.params.slug) {
			this.executePageQuery();
			this.executeProjectTypeQuery();
		}
	}

	/**
	 * Execute page query, process the response and set the state
	 */
	executePageQuery = async () => {
		const { match, client } = this.props;
		console.log(match);
		let uri = match.params.slug;
		if (!uri) {
			uri = "welcome";
		}
		const result = await client.query({
			query: PAGE_QUERY,
		});
		const page = result.data.pageBy;
		this.setState({ page });
	};

	executeProjectTypeQuery = async () => {
		const { client } = this.props;
		const result = await client.query({
			query: PROJ_QUERY,
		});
		const teamMembers = result.data.teamMembers.edges;

		this.setState({ teamMembers });
	};

	render() {
		const { page, teamMembers } = this.state;
		console.log(page);
		return (
			<div style={{ marginLeft: "315px" }}>
				<div className="pa2">
					<h1>{page.title}</h1>
				</div>
				<div
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{
						__html: page.content,
					}}
				/>
				<div>
					<h2>Lets check some more shit right here then.</h2>
					<p>{JSON.stringify(teamMembers)}</p>
				</div>
			</div>
		);
	}
}

export default withApollo(About);
