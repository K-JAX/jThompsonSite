import React, { Component } from "react";
import styled from "styled-components";
import { withApollo } from "react-apollo";
import { compose } from "recompose";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Config from "../../../config";

// components
import Headline from "../Atoms/Headline";
import { SVGLetter } from "../Atoms/SVGLetter";
import { Button } from "../Atoms/Button";
import { PRESS_QUERY } from "../../Functional/queries";

class PressArticles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pressArticles: [],
		};
	}

	componentDidMount() {
		this.executePressQuery();
		// console.log(this.state);
	}

	executePressQuery = async () => {
		const { client } = this.props;
		const result = await client.query({
			query: PRESS_QUERY,
		});
		// console.log(result.data.pressArticles.edges);
		let pressArticles = result.data.pressArticles.edges;
		pressArticles = pressArticles.map((article, i) => {
			let alignment = i % 2 === 0 ? "right" : "left";

			let link =
				article.node.acf.externalLinkOrPdf === "external"
					? article.node.acf.externalLink.url
					: article.node.acf.pdfUpload.mediaItemUrl;

			let modifiedPressArticle = (
				<div
					className={`row position-relative py-5 ${
						alignment === "right" ? "flex-row" : "flex-row-reverse"
					}`}
					style={{ minHeight: "475px" }}
					key={i}
				>
					<div className="col-12 col-md-7 d-flex align-items-center">
						<img src={article.node.featuredImage?.node.sourceUrl} />
					</div>
					<div className="col-12 col-md-5 d-flex align-content-center flex-wrap">
						<h2 className="w-100">{article.node.title}</h2>
						<a href={link} target="_blank">
							<Button hover={alignment}>
								{article.node.acf.ctaText}
							</Button>
						</a>
					</div>
					<div
						className="position-absolute w-100 h-100"
						style={{ zIndex: "-1" }}
					>
						<SVGLetter
							letter={article.node.title.slice(0, 1)}
							size={350}
							alignment={alignment}
						/>
					</div>
				</div>
			);
			return modifiedPressArticle;
		});
		this.setState({ pressArticles });
	};

	render() {
		const { pressArticles } = this.state;
		if (pressArticles === {}) return <p>Loading</p>;
		// console.log(Array.isArray(pressArticles));
		return (
			<ContainerDiv className="container-fluid">
				<div className="hero d-flex">
					<Headline text="Press" alignment="right" />
				</div>
				<div className="container" style={{ marginBottom: "35vh" }}>
					{pressArticles}
					{/* {pressArticles.map((article, i) => {
						// let svgCondition = article.node.featuredImage.node.sourceUrl.endsWith(
						// 	"svg"
						// );
						// console.log(article.node.featuredImage.node.sourceUrl.node.sourceUrl );

						return (
							<div className="row">
								<div>{article.node.title}</div>
								{article.node.featuredImage !== null && (
									<>
										<img
											src={
												article.node.featuredImage.node
													.sourceUrl
											}
										/>
										<p>
											{article.node.featuredImage.node.sourceUrl.endsWith(
												"svg"
											)
												? "yup"
												: "nope"}
										</p>
									</>
								)}

								{
									article.node.acf.externalLinkOrPdf ===
									"external" ? (
										<a
											href={
												article.node.acf.externalLink
													.url
											}
											target="_blank"
										>
											external
										</a>
									) : (
										<Link
											to={
												article.node.acf.pdfUpload
													.mediaItemUrl
											}
										>
											pdf
										</Link>
									)

									// isExternal ? (
									// 	<a href={article.node.acf.externalLink.url}>
									// 		{article.node.acf.externalLinkOrPdf}
									// 	</a>
									// ) : (
									// 	<Link
									// 		to={
									// 			article.node.acf.pdfUpload
									// 				.mediaItemUrl
									// 		}
									// 	>
									// 		{article.node.acf.externalLinkOrPdf}
									// 	</Link>
									// )
								}
							</div>
						);
					})} */}
				</div>
			</ContainerDiv>
		);
	}
}

export default compose(withApollo)(PressArticles);

const ContainerDiv = styled.div`
	.hero {
		justify-content: flex-end;
	}
`;
