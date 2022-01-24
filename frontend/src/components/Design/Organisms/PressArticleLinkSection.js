import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import VisibilitySensor from "react-visibility-sensor";

// components
import SVGLetter from "../Atoms/SVGLetter";
import PressArticleLinkCTA from "../Molecules/PressArticleLinkCTA";

import { EntryStatusContext } from "../../Functional/EntryStatus";

const PressArticleLinkSection = (props) => {
	let { title, source, link, alignment, image, ctaText } = props;
	const { status } = useContext(EntryStatusContext);

	const imgVariants = {
		initial: { x: alignment === "right" ? -30 : 30, opacity: 0 },
		moveIn: { x: 0, opacity: 1, transition: { duration: 1 } },
		moveOut: {
			x: alignment === "right" ? 30 : -30,
			opacity: 0,
			transition: { duration: 1 },
		},
	};

	return (
		<StyledSection
			className={`row position-relative py-2 py-lg-5 ${
				alignment === "right" ? "flex-row" : "flex-row-reverse"
			}`}
		>
			{image?.node.sourceUrl && (
				<VisibilitySensor>
					{({ isVisible }) => (
						<div className="img-container col-12 col-md-7 d-flex align-items-center justify-content-md-center text-md-center my-3">
							<AnimatePresence>
								{status === "entered" && isVisible && (
									<motion.img
										variants={imgVariants}
										initial="initial"
										animate="moveIn"
										exit="moveOut"
										src={image?.node.sourceUrl}
									/>
								)}
							</AnimatePresence>
						</div>
					)}
				</VisibilitySensor>
			)}
			<PressArticleLinkCTA
				title={title}
				source={source}
				link={link}
				alignment={alignment}
				ctaText={ctaText}
			/>
			<div
				className="position-absolute w-100 h-100"
				style={{ zIndex: "-1" }}
			>
				<SVGLetter
					letter={
						source === undefined
							? title.slice(0, 1)
							: source.slice(0, 1)
					}
					size={350}
					alignment={alignment}
				/>
			</div>
		</StyledSection>
	);
};
export default PressArticleLinkSection;

const StyledSection = styled.section`
	min-height: 500px;
	/* @media all and (max-width: 767px) {
		min-height: 585px;
	} */
	.img-container {
		min-height: 236px;
	}
`;
