import { useQuery } from "react-apollo";
import { useLocation } from "react-router";
import gql from "graphql-tag";
import { Parser as HtmlToReactParser } from "html-to-react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

// components
import Headline from "../Atoms/Headline";
import GiantLetters from "../Molecules/GiantLetters";
import FigureLink from "../Organisms/FigureLink";
import OverlayAnimDiv from "../Molecules/OverlayAnimDiv";
import FullPageLoader from "../Molecules/FullPageLoader";

/**
 * GraphQL page query that takes a page slug as a uri
 * Returns the title and content of the page
 */
const PAGE_QUERY = gql`
	query PageQuery {
		pageBy(uri: "about") {
			title
			content
			seo {
				title
				metaDesc
				metaKeywords
			}
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

const About = (props) => {
	const { pathname } = useLocation();
	const uri = pathname.replace("/", "");
	const { status } = props;

	const {
		loading,
		error,
		data: {
			pageBy: { title, content, featuredImage, aboutDetails, seo } = {},
		} = {},
	} = useQuery(PAGE_QUERY);
	if (loading) return <FullPageLoader />;
	if (error) return `Error! ${error}`;

	const htmlToReactParser = new HtmlToReactParser();
	const parsedContent = htmlToReactParser.parse(content);
	const parsedIntro = htmlToReactParser.parse(aboutDetails.introText);
	// console.log(status);
	return (
		<PageDiv
			className={`container-fluid px-0`}
			style={{ overflowX: "hidden", overflowY: "hidden" }}
		>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{`${seo.title}`}</title>
				<link rel="canonical" href={`${seo.canonical}`} />
				<meta name="description" content={`${seo.metaDesc}`} />
			</Helmet>
			<div className="container position-relative">
				<div className="row">
					<div style={{ width: "450px" }} className="mt-5 pt-3">
						<OverlayAnimDiv
							direction="right"
							content={<img src={featuredImage.node.sourceUrl} />}
							status={status}
						/>
					</div>
					<div className="col ms-xl-5 ms-md-3 ms-0">
						<Headline
							className="mb-3"
							status={status}
							text={title}
						/>
						<div className="intro">
							<OverlayAnimDiv
								content={parsedIntro}
								status={status}
							/>
						</div>
					</div>
					<GiantLetters
						letters="JTA"
						layout="cascade"
						zIndex={-1}
						status={status}
					/>
				</div>
			</div>
			<div className="container content-container px-4">
				<div className="row">
					<OverlayAnimDiv content={parsedContent} status={status} />
				</div>
			</div>
			<div className="container px-4">
				<div className="row justify-content-center">
					{aboutDetails.ctaLinks.map((link) => (
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
};

export default About;

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
