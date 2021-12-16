import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import { Helmet } from "react-helmet";

/**
 * GraphQL page query that takes a page slug as a uri
 * Returns the title and content of the page
 */
const PAGE_QUERY = gql`
	query PageQuery($uri: String!) {
		pageBy(uri: $uri) {
			title
			content
			seo {
				title
				metaDesc
				metaKeywords
			}
		}
	}
`;

/**
 * Fetch and display a Page
 */
class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: {
				title: "",
				content: "",
				seo: {},
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
		let uri = match.params.slug;
		if (!uri) {
			uri = "welcome";
		}
		const result = await client.query({
			query: PAGE_QUERY,
			variables: { uri },
		});
		const page = result.data.pageBy;
		this.setState({ page });
	};

	render() {
		const { page } = this.state;

		return (
			<div style={{ marginLeft: "315px" }}>
				<Helmet>
					<meta charSet="utf-8" />
					<title>{`${
						data.generalSettings.title
					} ${" - Welcome"}`}</title>
					<link
						rel="canonical"
						href="https://jThompsonArchitect.com"
					/>
					<link rel="icon" type="image/png" href={data.faviconUrl} />
				</Helmet>
				<p>{JSON.stringify(page)}</p>
				<div className="pa2">
					<h1>{page.title}</h1>
				</div>
				<div
					dangerouslySetInnerHTML={{
						__html: page.content,
					}}
				/>
			</div>
		);
	}
}

export default withApollo(Page);
