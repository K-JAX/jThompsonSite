import React from "react";
import styled from "styled-components";
import { Media } from "react-breakpoints";

// components
import SlideThumb from "../Atoms/SlideThumb";
import { SlideshowContext } from "../Organisms/Slideshow";

const SlideStrip = React.memo((props) => {
	const { thumbs } = props;
	if (thumbs === undefined) return <p>Loading</p>;

	return (
		<SlideshowContext.Consumer>
			{(context) => (
				<>
					<Media>
						{({ breakpoints, currentBreakpoint }) => (
							<SlideStripDiv className="slide-strip">
								{thumbs.map((thumb, i) => {
									let displayNum =
										breakpoints[currentBreakpoint] <
										breakpoints.md
											? 3
											: 4;

									let activeStatus =
										context.slideIndex === i
											? "active"
											: "";

									let activeRange =
										context.slideIndex < 2
											? [0, displayNum]
											: [
													context.slideIndex -
														(displayNum - 1),
													context.slideIndex +
														(displayNum - 2),
											  ];
									// if (context.slideIndex > 2) {
									// 	activeRange = [0, 4];
									// }
									// // console.log(activeRange);
									var visibleThumbs = [];
									for (
										let i = activeRange[0];
										i < activeRange[1];
										i++
									) {
										visibleThumbs.push(i);
									}
									// console.log(visibleThumbs);
									// console.log(visibleThumbs.includes(i));
									let visibleStatus = visibleThumbs.includes(
										i
									)
										? "visible"
										: "";

									return (
										<SlideThumb
											active={activeStatus}
											visible={visibleStatus}
											key={thumb.id}
											num={i}
											image={thumb}
											onItemClick={context.switchToIndex}
										/>
									);
								})}
							</SlideStripDiv>
						)}
					</Media>
				</>
			)}
		</SlideshowContext.Consumer>
	);
	// return <SlideThumb />;
});

export default SlideStrip;

const SlideStripDiv = styled.div`
	display: flex;
	align-content: center;
	align-items: center;
	min-height: 100px;
	.thumb {
		&:first-of-type:not(.visible),
		&:last-of-type:not(.visible) {
			opacity: 0.25;
			margin: 0 0.75em;
		}
	}
`;
