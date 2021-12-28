import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

// components
import Button from "../Atoms/Button";

import { EntryStatusContext } from "../../Functional/EntryStatus";

const PressArticleLinkCTA = (props) => {
	let { title, link, alignment, ctaText } = props;

	const { status } = useContext(EntryStatusContext);

	const variants = {
		initial: { y: 30, opacity: 0 },
		moveIn: { y: 0, opacity: 1, transition: { delay: 0.25 } },
		moveOut: { y: 30, opacity: 0 },
	};
	return (
		<VisibilitySensor>
			{({ isVisible }) => (
				<div className="col-12 col-md-5 d-flex align-content-center flex-wrap">
					<AnimatePresence>
						{status === "entered" && isVisible && (
							<motion.div
								variants={variants}
								initial="initial"
								animate="moveIn"
								exit="moveOut"
							>
								<h2 className="w-100">{title}</h2>
								<a href={link} target="_blank">
									<Button hover={alignment}>{ctaText}</Button>
								</a>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			)}
		</VisibilitySensor>
	);
};

export default PressArticleLinkCTA;
