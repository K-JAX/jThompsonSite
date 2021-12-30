import { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo";

// components
import Headline from "../Atoms/Headline";
import Loader from "../Atoms/Loader";
import FullPageLoader from "../Molecules/FullPageLoader";
import PressArticleLinkSection from "../Organisms/PressArticleLinkSection";
import { EntryStatusProvider } from "../../Functional/EntryStatus";

// functions
import { PRESS_QUERY } from "../../Functional/queries";

const PressArticles = (props) => {
	const { status } = props;
	const [pressArticles, setPressArticles] = useState([]);
	const { loading, error, data } = useQuery(PRESS_QUERY, {
		onCompleted: (data) => setPressArticles(data.pressArticles.edges),
	});
	if (loading) return <FullPageLoader />;
	if (error) return `Error! ${error}`;
	if (!data) return <p>Not found</p>;

	return (
		<EntryStatusProvider status={status}>
			<ContainerDiv className={`container-fluid`}>
				<div className="hero d-flex">
					<Headline text="Press" alignment="right" status={status} />
				</div>
				<div className="container" style={{ marginBottom: "35vh" }}>
					{pressArticles.map((article, i) => {
						return (
							<PressArticleLinkSection
								key={i}
								title={article.node.title}
								link={
									article.node.acf.externalLinkOrPdf ===
									"external"
										? article.node.acf.externalLink.url
										: article.node.acf.pdfUpload
												.mediaItemUrl
								}
								alignment={i % 2 === 0 ? "right" : "left"}
								image={article.node.featuredImage}
								ctaText={article.node.acf.ctaText}
							/>
						);
					})}
				</div>
			</ContainerDiv>
		</EntryStatusProvider>
	);
};

export default PressArticles;

const ContainerDiv = styled.div`
	.hero {
		justify-content: flex-end;
		@media all and (max-width: 767px) {
			justify-content: flex-start;
		}
	}
`;
