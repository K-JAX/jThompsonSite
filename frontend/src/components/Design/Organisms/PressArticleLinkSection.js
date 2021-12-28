import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

// components
import SVGLetter from "../Atoms/SVGLetter";
import PressArticleLinkCTA from "../Molecules/PressArticleLinkCTA";

import { EntryStatusContext } from "../../Functional/EntryStatus";

const PressArticleLinkSection = (props) => {
	let { title, link, alignment, image, ctaText } = props;
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
		<div
			className={`row position-relative py-5 ${
				alignment === "right" ? "flex-row" : "flex-row-reverse"
			}`}
			style={{ minHeight: "475px" }}
		>
			<VisibilitySensor>
				{({ isVisible }) => (
					<div className="col-12 col-md-7 d-flex align-items-center">
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
			<PressArticleLinkCTA
				title={title}
				link={link}
				alignment={alignment}
				ctaText={ctaText}
			/>
			<div
				className="position-absolute w-100 h-100"
				style={{ zIndex: "-1" }}
			>
				<SVGLetter
					letter={title.slice(0, 1)}
					size={350}
					alignment={alignment}
				/>
			</div>
		</div>
	);
};
export default PressArticleLinkSection;
