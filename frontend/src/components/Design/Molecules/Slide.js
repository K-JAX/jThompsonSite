import styled from "styled-components";
import ProjectTitle from "./ProjectTitle";
import { motion, AnimatePresence } from "framer-motion";

const Slide = (props) => {
	if (props === undefined) return <p>Loading</p>;
	const {
		title,
		date,
		location,
		img,
		active,
		className,
		status,
		percentage,
		isSingleEntity,
		transitionSpeed,
		titleAttachClass,
	} = props;
	const ProjectTitleVariants = {
		initial: { y: 128 },
		moveIn: { y: 0, transition: { delay: 0.9 } },
		moveOut: { y: 128, transition: { delay: 0 } },
	};

	if (isSingleEntity) {
		return (
			<>
				<SlideComponent
					className={className}
					transitionSpeed={transitionSpeed}
				>
					<img
						alt={`${title} project slide image.`}
						src={img.sourceUrl}
						srcSet={img.srcSet}
					/>
				</SlideComponent>
			</>
		);
	}
	return (
		<SlideComponent
			className={className}
			img={img}
			transitionSpeed={transitionSpeed}
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
					</ProjectTitleContainer>
				)}
			</AnimatePresence>
		</SlideComponent>
	);
};

export default Slide;

const SlideComponent = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	overflow-y: visible;
	background: url(${(props) => props.img}) center / cover no-repeat;
	opacity: 0;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	transition: ${(props) => props.transitionSpeed / 10}s;
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
		top: calc(100% - 128px);
	}
`;
