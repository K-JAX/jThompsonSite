import { useQuery } from "react-apollo";
import { withBreakpoints } from "react-breakpoints";
import { useLocation, useNavigate, useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// components
import ProjectSingle from "./ProjectSingle";
import Wipes from "../Molecules/Wipes";
import LoadingMatte from "../Atoms/LoadingMatte";
import Loader from "../Atoms/Loader";

// functions
import { HOME_QUERY } from "../../Functional/queries";

const Home = (props) => {
	const { loading, error, data } = useQuery(HOME_QUERY);
	let { status } = props;

	const animVariants = {
		moveIn: {
			width: `calc(100% - ${300}px)`,
			x: 0,
			transition: {
				type: "tween",
				delay: location?.state?.from === "Intro" ? 0.5 : 0,
			},
		},
		moveOut: {
			width: `0%`,
			transition: {
				type: "tween",
				delay: 0,
			},
		},
	};

	const location = useLocation();
	if (loading)
		return location?.state?.from === "Intro" ? (
			<LoadingMatte />
		) : (
			<Loader />
		);
	if (error) return `Error! ${error}`;

	return (
		<PageDiv status={status} className={`page page-route-${status}`}>
			{location?.state?.from === "Intro" && (
				<Wipes
					className="z-10"
					startColor={"dark"}
					status={status}
					from={0}
					enter={105}
					leave={-105}
					delay={300}
				/>
			)}
			<AnimatePresence>
				{status == "entered" && (
					<motion.div
						className="z-1 position-relative"
						variants={animVariants}
						initial={{
							width: `100%`,
							x: `${
								location?.state?.from === "Intro" ? 0 : 1000
							}`,
						}}
						animate="moveIn"
						exit="moveOut"
					>
						<ProjectSingle
							featured={true}
							options={data.page.sliderTimer}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</PageDiv>
	);
};
export default withBreakpoints(Home);

const PageDiv = styled.div`
	display: flex;
	justify-content: end;
	${(props) => props.status === "entering" && `z-index: -2;`}
	${(props) =>
		(props.status === "exiting" || props.status === "exited") &&
		`z-index: -2;`}
`;
