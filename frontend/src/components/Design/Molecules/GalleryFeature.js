import React, { useState, useEffect } from "react";
import styled from "styled-components";

const GalleryFeature = (props) => {
	const [noun] = useState("dawg thang");
	const { features } = props;
	if (props.features === null) return <p>still loading</p>;
	return (
		<GalleryDiv>
			{features.map((feature, i) => {
				if (i < 2) {
					return (
						<img
							key={feature.id}
							className={`tile-${i}`}
							srcSet={feature.srcSet}
						/>
					);
				}
			})}
		</GalleryDiv>
	);
};

export default GalleryFeature;

const GalleryDiv = styled.div`
	display: flex;
	width: 100%;
	height: 650px;
	/* flex-wrap: no-wrap; */
	/* overflow: hidden; */
	justify-content: flex-start;
	img {
		object-fit: cover;
	}
	/* Tile styling */
	.tile-0 {
		width: calc(100% - 438px);
		flex-grow: 0;
		/* flex-shrink: 3; */
		/* flex-basis: 300px; */
		/* flex: 0 1 100%; */
	}
	.tile-1 {
		width: 450px;
		flex-grow: 2;
		flex-shrink: 0;
		flex-basis: 400px;
		/* flex: 2 0 450px; */
	}
`;
