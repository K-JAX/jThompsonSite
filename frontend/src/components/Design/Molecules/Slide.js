import { useState, useContext } from "react";
import styled from "styled-components";
import ProjectTitle from "./ProjectTitle";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import { EntryStatusContext } from "../../Functional/EntryStatus";
import Button from "../Atoms/Button";
import FullScreenStage from "./FullScreenStage";
import FullScreenIcon from "../Atoms/FullScreenIcon";

const Slide = (props) => {
	if (props === undefined) return <p>Loading</p>;
	const {
		title,
		date,
		location,
		img,
		slug,
		active,
		className,
		percentage,
		isSingleEntity,
		transitionSpeed,
		titleAttachClass,
	} = props;
	const { status } = useContext(EntryStatusContext);

	const ProjectTitleVariants = {
		initial: { y: "128%" },
		moveIn: {
			y: "0%",
			transition: { bounce: 80, duration: 0.25 },
		},
		moveOut: {
			y: "128%",
			transition: { bounce: 0, duration: 0.25 },
		},
	};
	const values = [true];
	const [show, setShow] = useState(false);
	const [fullscreen, setFullscreen] = useState(true);
	const [modalMarkup, setModalMarkup] = useState("");
	const handleClose = () => setShow(false);
	const handleShow = (breakpoint) => {
		setFullscreen(breakpoint);
		setModalMarkup(
			<img
				alt={`${title} project slide image.`}
				src={img.sourceUrl}
				srcSet={img.srcSet}
			/>
		);
		setShow(true);
	};

	// console.log(img.srcSet);
	if (isSingleEntity) {
		return (
			<>
				<FullScreenStage
					show={show}
					fullscreen={fullscreen}
					onHide={() => setShow(false)}
				>
					{modalMarkup}
				</FullScreenStage>
				<AnimatePresence>
					{status === "entered" && (
						<SlideComponent
							className={className}
							variants={ProjectTitleVariants}
							initial="initial"
							animate="moveIn"
							exit="moveOut"
							transitionSpeed={transitionSpeed}
						>
							<img
								alt={`${title} project slide image.`}
								src={img.sourceUrl}
								srcSet={img.srcSet}
							/>
							<Button
								className="bg-white px-1 py-1 border-0"
								onClick={() => handleShow(values[0])}
							>
								<FullScreenIcon />
							</Button>
						</SlideComponent>
					)}
				</AnimatePresence>
			</>
		);
	}
	return (
		<SlideComponent
			className={className}
			img={img}
			transitionSpeed={transitionSpeed}
			isSingle={false}
		>
			<AnimatePresence>
				{status === "entered" && (
					<ProjectTitleContainer
						className={`titleContainer ${titleAttachClass}`}
						variants={ProjectTitleVariants}
						initial="initial"
						animate="moveIn"
						exit="moveOut"
					>
						<Link to={`/portfolio/${slug}`}>
							<ProjectTitle
								title={title}
								subtitle={`${date.slice(0, 4)}${
									location?.city !== undefined
										? ", " + location.city + ","
										: ""
								} ${
									location?.stateShort !== undefined
										? location.stateShort
										: ""
								}`}
								type="slideTitle"
								active={active}
								attachmentClass={titleAttachClass}
								percentage={percentage}
							/>
						</Link>
					</ProjectTitleContainer>
				)}
			</AnimatePresence>
		</SlideComponent>
	);
};

export default Slide;

const SlideComponent = styled(motion.div)`
	position: absolute;
	width: 100%;
	height: 100%;
	overflow-y: visible;
	${(props) =>
		!props.isSingle &&
		`background: url(${props.img}) center / cover no-repeat;`}
	opacity: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	@media all and (max-width: 767px) {
		background-size: contain;
	}
	img {
		/* width: 35%; */
		width: auto;
		height: auto;
		max-width: 100%;
		max-height: 100%;
		/* width: 100%; */
		/* height: 100%; */
		object-fit: contain;
	}
	button {
		position: absolute;
		bottom: 0;
		right: 0;
	}

	transition: opacity ${(props) => props.transitionSpeed / 10}s;
	&.activeSlide {
		opacity: 1;
		z-index: 1;
	}
`;

const ProjectTitleContainer = styled(motion.div)`
	position: absolute;
	z-index: 1;
	min-width: 600px;
	top: calc(100% - 128px);
	right: 0;
	a {
		text-decoration: none;
	}
	&.floating {
		position: fixed;
	}
	&.hero {
		position: fixed;
	}
	&.feature {
		position: absolute;
		top: 100%;
		bottom: initial;
	}
	@media all and (max-width: 1199px) {
		right: 80px;
		&.feature {
			right: 0px;
		}
	}
	@media all and (max-width: 767px) {
		right: 0;
		width: 100%;
		min-width: initial;
		top: calc(100% - 128px);
	}
`;
