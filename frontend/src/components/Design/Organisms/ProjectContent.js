import React, { useContext } from "react";
import styled from "styled-components";
import { withApollo } from "react-apollo";
import Config from "../../../config";

// components
import GalleryFeature from "../Molecules/GalleryFeature";
import OverlayAnimDiv from "../Molecules/OverlayAnimDiv";
import StatBox from "../Organisms/StatBox";
import TitleDescription from "../Molecules/TitleDescription";
import CTAStrip from "../Molecules/CTA-Strip";
import { EntryStatusContext } from "../../Functional/EntryStatus";

const ProjectContent = (props) => {
	const {
		features,
		contentType,
		summary,
		content,
		showStatBox,
		stats,
		isSingle,
	} = props;

	// console.log(props.context);
	const { status } = useContext(EntryStatusContext);
	// console.log(status);

	return (
		<ProjectContentSection>
			<link
				rel="stylesheet"
				href={`${Config.baseUrl}/wp-includes/css/dist/block-library/style.min.css`}
			/>

			{!isSingle && (
				<GalleryFeature className="container" features={features} />
			)}
			{contentType === "descriptive" ? (
				<div>
					<div className="d-flex flex-wrap mb-5">
						{showStatBox ? <StatBox stats={stats} /> : ""}
						{summary !== null && (
							<TitleDescription
								title="Project Summary"
								content={summary}
								className="col my-4"
							/>
						)}
					</div>
					<div className="project-content ms-5">{content}</div>
					{!isSingle && (
						<CTAStrip
							text={`See more projects.`}
							url="/portfolio"
						/>
					)}
				</div>
			) : (
				<div>
					{summary !== null && (
						<TitleDescription
							title="Project Summary"
							content={summary}
							className="col my-4"
						/>
					)}
					{!isSingle && (
						<CTAStrip
							text={`See more projects.`}
							url="/portfolio"
						/>
					)}
				</div>
			)}
		</ProjectContentSection>
	);
};

export default withApollo(ProjectContent);

const ProjectContentSection = styled.section``;
