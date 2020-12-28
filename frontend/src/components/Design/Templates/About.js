import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import { Parser as HtmlToReactParser } from "html-to-react";

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
		};
	}

	componentDidMount() {
		this.executePageQuery();
	}

	componentDidUpdate(prevProps) {
		const { props } = this;
		if (props.match.params.slug !== prevProps.match.params.slug) {
			this.executePageQuery();
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

	render() {
		const { page } = this.state;
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
			</div>
		);
	}
}

export default withApollo(About);
