import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import { Parser as HtmlToReactParser } from "html-to-react";
import styled from "styled-components";
import { TransitionGroup, Transition } from "react-transition-group";

// components
import Headline from "../Atoms/Headline";
import { GiantLetters } from "../Molecules/GiantLetters";
import FigureLink from "../Organisms/FigureLink";

/**
 * GraphQL page query that takes a page slug as a uri
 * Returns the title and content of the page
 */
const PAGE_QUERY = gql`
	query PageQuery {
		pageBy(uri: "about") {
			title
			content
			featuredImage {
				node {
					sourceUrl(size: LARGE)
				}
			}
			aboutDetails {
				introText
				ctaLinks {
					alignment
					image {
						sizes(size: MEDIUM)
						sourceUrl
						title
					}
					link {
						title
						url
						target
					}
					description
					titletext
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
				featuredImage: {},
				aboutDetails: {},
			},
			isLoaded: false,
		};
	}

	componentDidMount() {
		this.executePageQuery();
		// console.log(this.props);
	}

	componentDidUpdate(prevProps) {
		const { props } = this;
		if (props.match.params.slug !== prevProps.match.params.slug) {
			this.executePageQuery();
		}
		// console.log(this.props.status);
	}

	/**
	 * Execute page query, process the response and set the state
	 */
	executePageQuery = async () => {
		const { client } = this.props;
		// let uri = match.params.slug;
		// if (!uri) {
		// 	uri = "welcome";
		// }
		const result = await client.query({
			query: PAGE_QUERY,
		});
		const page = result.data.pageBy;
		this.setState({ page, isLoaded: true });
	};

	render() {
		const { page, isLoaded } = this.state;
		const { status, className } = this.props;
		if (page.title === "") return <p>Loading</p>;
		const { title, content, featuredImage, aboutDetails } = page;
		const { ctaLinks } = aboutDetails;
		var htmlToReactParser = new HtmlToReactParser();
		var parsedContent = htmlToReactParser.parse(content);
		var parsedIntro = htmlToReactParser.parse(aboutDetails.introText);

		return (
			<PageDiv
				className={`container-fluid px-0`}
				style={{ overflowX: "hidden", overflowY: "hidden" }}
			>
				<div className="container position-relative">
					<div className="row">
						<div style={{ width: "450px" }} className="mt-5 pt-3">
							<img src={featuredImage.node.sourceUrl} />
						</div>
						<div className="col ml-xl-5 ml-md-3 ml-0">
							<Headline
								className="mb-3"
								status={status}
								text={page.title}
							/>
							<div>{parsedIntro}</div>
						</div>
						<GiantLetters
							letters="JTA"
							layout="cascade"
							zIndex={-1}
						/>
					</div>
				</div>
				<div className="container content-container px-4">
					<div className="row">{parsedContent}</div>
				</div>
				<div className="container px-4">
					<div className="row justify-content-center">
						{ctaLinks.map((link) => (
							<FigureLink
								key={link.image.sourceUrl}
								alignment={link.alignment}
								captionTitle={link.titletext}
								captionDescription={link.description}
								img={link.image.sourceUrl}
								link={link.link}
							/>
						))}
					</div>
				</div>
			</PageDiv>
		);
	}
}

export default withApollo(About);

const PageDiv = styled.div`
	.content-container {
		margin-top: 17em;
		margin-bottom: 17em;
		@media all and (max-width: 768px) {
			margin-top: 7em;
			margin-top: 7em;
		}
	}
`;
