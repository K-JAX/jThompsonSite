import React, { Component } from "react";
import styled from "styled-components";
import { withApollo } from "react-apollo";
import Config from "../../../config";

// components
import GalleryFeature from "../Molecules/GalleryFeature";
import StatBox from "../Organisms/StatBox";
import TitleDescription from "../Molecules/TitleDescription";
import CTAStrip from "../Molecules/CTA-Strip";

class ProjectContent extends Component {
	render() {
		const {
			features,
			contentType,
			summary,
			content,
			showStatBox,
			stats,
			isSingle,
		} = this.props;
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
						<div className="row mb-5">
							{showStatBox ? <StatBox stats={stats} /> : ""}
							{summary !== null && (
								<TitleDescription
									title="Project Summary"
									content={summary}
									className="col my-4"
								/>
							)}
						</div>
						{content}
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
	}
}

export default withApollo(ProjectContent);

const ProjectContentSection = styled.section``;
