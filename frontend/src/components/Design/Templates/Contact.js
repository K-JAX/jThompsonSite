import React, { Component, useState } from "react";
import { useQuery } from "react-apollo";
import { useLocation } from "react-router";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// components
import Headline from "../Atoms/Headline";
import Form from "../Organisms/Form";
import Loader from "../Atoms/Loader";

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

const Contact = (props) => {
	const [page, setPage] = useState({});
	const [form, setForm] = useState({});
	const { pathname } = useLocation();
	const uri = pathname.replace("/", "");
	const { status } = props;

	const pageResp = useQuery(PAGE_QUERY, {
		onCompleted: (data) => setPage(data.pageBy),
	});
	const formResp = useQuery(FORM_QUERY, {
		onCompleted: (data) => setForm(data.form),
	});
	if (pageResp.loading || formResp.loading) return <Loader />;
	if (pageResp.error || formResp.error)
		return `Error! ${pageResp.error} ${formResp.error}`;
	if (!pageResp.data || !formResp.data) return <Loader />;

	return (
		// <p>Test</p>
		<PageDiv className="container-fluid">
			<div className="row">
				<AnimatePresence>
					{status == "entered" && (
						<motion.div
							initial={{ x: -50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: -50, opacity: 0 }}
							transition={{ duration: 1 }}
							className="col-12 col-md-6 featured-img"
							style={{
								backgroundImage: `url(${page.featuredImage?.node.sourceUrl})`,
							}}
						/>
					)}
				</AnimatePresence>
				<div className="title-container col-12 col-md-6">
					<div className="pa2">
						<Headline
							className="mb-3"
							alignment="right"
							status={status}
							text={pageResp.data.pageBy.title}
						/>
					</div>
					<AnimatePresence>
						{status == "entered" && (
							<motion.div
								initial={{ x: 50, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: 50, opacity: 0 }}
								transition={{ duration: 1 }}
								className="row"
								style={{ marginLeft: "-20px" }}
							>
								<Form
									className="col-12"
									data={formResp.data.form}
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</PageDiv>
	);
};

/**
 * Fetch and display a Page
 */
class ContactOld extends Component {
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
					<AnimatePresence>
						{status == "entered" && (
							<motion.div
								initial={{ x: -50, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: -50, opacity: 0 }}
								transition={{ duration: 1 }}
								className="col-12 col-md-6 featured-img"
								style={{
									backgroundImage: `url(${page.featuredImage?.node.sourceUrl})`,
								}}
							/>
						)}
					</AnimatePresence>
					<div className="title-container col-12 col-md-6">
						<div className="pa2">
							<Headline
								className="mb-3"
								alignment="right"
								status={status}
								text={page.title}
							/>
						</div>
						<AnimatePresence>
							{status == "entered" && (
								<motion.div
									initial={{ x: 50, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									exit={{ x: 50, opacity: 0 }}
									transition={{ duration: 1 }}
									className="row"
									style={{ marginLeft: "-20px" }}
								>
									<Form className="col-12" data={form} />
								</motion.div>
							)}
						</AnimatePresence>
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
