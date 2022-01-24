import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import styled from "styled-components";

// components
import Button from "../Atoms/Button";

import { EntryStatusContext } from "../../Functional/EntryStatus";

const PressArticleLinkCTA = (props) => {
	let { title, source, link, alignment, ctaText } = props;

	const { status } = useContext(EntryStatusContext);

	const variants = {
		initial: { y: 30, opacity: 0 },
		moveIn: { y: 0, opacity: 1, transition: { delay: 0.25 } },
		moveOut: { y: 30, opacity: 0 },
	};
	return (
		<VisibilitySensor>
			{({ isVisible }) => (
				<ContainerDiv className="col-12 col-md-5 d-flex align-content-center justify-content-start justify-content-md-center flex-wrap">
					<AnimatePresence>
						{status === "entered" && isVisible && (
							<motion.div
								variants={variants}
								initial="initial"
								animate="moveIn"
								exit="moveOut"
							>
								<h2 className="w-100">{title}</h2>
								{source && (
									<p className="text-uppercase fw-bold gray">
										{source}
									</p>
								)}
								<a href={link} target="_blank">
									<Button hover={alignment}>{ctaText}</Button>
								</a>
							</motion.div>
						)}
					</AnimatePresence>
				</ContainerDiv>
			)}
		</VisibilitySensor>
	);
};

export default PressArticleLinkCTA;

const ContainerDiv = styled.div`
	min-height: 230px;
`;
