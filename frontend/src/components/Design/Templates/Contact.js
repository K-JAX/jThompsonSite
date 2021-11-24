import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

// Components
import Headline from "../Atoms/Headline";
import Form from "../Organisms/Form";
import OverlayAnimDiv from "../Molecules/OverlayAnimDiv";

/**
 * GraphQL page query that takes a page slug as a uri
 * Returns the title and content of the page
 */

const PAGE_QUERY = gql`
	query PageQuery {
		pageBy(uri: "contact") {
			title
			content
			featuredImage {
				node {
					sourceUrl(size: LARGE)
					altText
				}
			}
		}
	}
`;

const FORM_QUERY = gql`
	query FormQuery {
		form(id: "1", idType: DATABASE_ID) {
			title
			fields {
				nodes {
					fieldId
					label
					required
					type
				}
			}
		}
	}
`;

/**
 * Fetch and display a Page
 */
class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			page: {
				title: "",
				content: "",
			},
			form: {},
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

	executePageQuery = async () => {
		const { match, client } = this.props;
		let uri = match.params.slug;
		if (!uri) {
			uri = "/";
		}
		const result = await client.query({
			query: PAGE_QUERY,
			variables: { uri },
		});
		const page = result.data.pageBy;
		const formResult = await client.query({
			query: FORM_QUERY,
		});
		const { form } = formResult.data;
		this.setState({ page, form, isLoaded: true });
	};

	render() {
		const { page, form, isLoaded } = this.state;
		const { status } = this.props;

		// var htmlToReactParser = new HtmlToReactParser();
		// const parsedContent = htmlToReactParser.parse(page.content);
		if (!isLoaded) return <p>Loading</p>;

		return (
			<PageDiv className="container-fluid">
				<div className="row">
					<motion.div
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}
						className="col-12 col-md-6 featured-img"
						style={{
							backgroundImage: `url(${page.featuredImage?.node.sourceUrl})`,
						}}
					/>
					<div className="title-container col-12 col-md-6">
						<div className="pa2">
							<Headline
								className="mb-3"
								alignment="right"
								status={status}
								text={page.title}
							/>
						</div>

						<OverlayAnimDiv
							status={status}
							content={
								<div
									className="row"
									style={{ marginLeft: "-20px" }}
								>
									<Form className="col-12" data={form} />
								</div>
							}
						/>
					</div>
				</div>
			</PageDiv>
		);
	}
}

export default withApollo(Contact);

const PageDiv = styled.div`
	.featured-img {
		background-size: cover;
		background-repeat: no-repeat;
	}
	.title-container {
		margin-left: --20px;
	}
`;
