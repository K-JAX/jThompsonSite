import { useRef, useEffect } from "react";
import { useQuery } from "react-apollo";
import { withBreakpoints } from "react-breakpoints";
import { useLocation, useNavigate, useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

// components
import ProjectSingle from "./ProjectSingle";
import Wipes from "../Molecules/Wipes";
import LoadingMatte from "../Atoms/LoadingMatte";
import Loader from "../Atoms/Loader";

// functions
import { HOME_QUERY } from "../../Functional/queries";
import { usePrevLocation } from "../../Functional/CustomHooks";

const Home = (props) => {
	const { loading, error, data } = useQuery(HOME_QUERY);
	let { status } = props;

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
			<motion.div
				className="z-1"
				initial={{ width: `calc(100% - ${0}px)` }}
				animate={{ width: `calc(100% - ${300}px)` }}
				transition={{
					type: "tween",
					delay: 1.0,
				}}
			>
				<ProjectSingle
					featured={true}
					options={data.page.sliderTimer}
				/>
			</motion.div>
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
