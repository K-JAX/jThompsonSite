import React, { useState, useEffect, useMemo } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useSpring, useTrail, animated, useTransition } from "react-spring";

const Headline = (props) => {
	const { text, loaded, className, alignment } = props;
	let { status } = props;
	// status = status === undefined ? "entered" : status;

	const [up, set] = useState(false);
	const [items, setItems] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
		!up && console.log("running useEffect");
		// set(true);
		// console.log(`isLoaded: ${isLoaded}, status: ${status}, up: ${up}`);
		// inCondition && startAnim();
		startAnim();
		outCondition && exitAnim();
	}, []);

	const inCondition = (status === "entering" || status === "entered") && !up;

	const outCondition = (status === "exiting" || status === "exited") && up;

	const startAnim = () => {
		console.log("running the start anim");
		setTimeout(() => {
			set(true);
			setItems([0, 1, 2]);
		}, 1000);
	};

	const exitAnim = () => {
		setTimeout(() => {
			set(false);
		}, 700);
		setItems([]);
	};

	const chars = useMemo(() => text.split(""), [text]);

	const spring = useSpring(
		{
			from: { opacity: 0 },
			to: async (next) => {
				await next({
					opacity: up ? 1 : 0,
					color: "#fff",
				});
				await new Promise((resolve) => setTimeout(resolve, 400));
				await next({ color: "#000" });
			},
			config: { tension: 250 },
		},
		[]
	);

	const trail = useTrail(chars.length, {
		config: { mass: 5, tension: 1800, friction: 140 },
		y: up ? 0 : 50,
	});

	const boxTransitions = useTransition(items, (item) => item, {
		from: { width: `0%`, left: "-10%", right: "110%" },
		enter: (item) => async (next, cancel) => {
			await next({
				width: `100%`,
				left: "0%",
				right: "100%",
			});
			await next({ width: `0%`, left: `110%`, right: `0%` });
		},
		leave: (item) => async (next, cancel) => {
			await next({
				width: `0%`,
				left: `110%`,
				right: `0%`,
			});
			await next({
				width: `100%`,
				left: "0%",
				right: "100%",
				config: { duration: 250 },
			});
			await next({
				width: `0%`,
				left: "-10%",
				right: "110%",
			});
		},
		trail: 210,
	});

	return (
		<HeadlineH1
			className={`page-heading ${className} ${loaded ? "loaded" : ""}`}
			alignment={alignment}
		>
			<animated.div style={{ ...spring }}>
				{trail.map(({ y, ...rest }, index) => (
					<animated.span
						key={`key-${index}-letter${chars[index]}`}
						style={{
							...rest,
							transform: y.interpolate(
								(y) => `translate3d(0,${y}px,0)`
							),
						}}
					>
						{chars[index]}
					</animated.span>
				))}
			</animated.div>
			<div>
				{items !== [] &&
					boxTransitions.map(({ item, key, props }, i) => (
						<animated.div
							key={`layer-${i}`}
							num={i}
							className={`box-transition layer-${i + 1} `}
							style={props}
						/>
					))}
			</div>
		</HeadlineH1>
	);
};

const areEqual = (prevProps, nextProps) => {
	return prevProps.status === "entering";
};

// export default withApollo(Headline);
export default React.memo(Headline, areEqual);

const HeadlineH1 = styled.h1`
	position: relative;
	justify-self: end;
	font-size: 8.25rem;
	font-weight: 100;
	height: auto;
	display: inline-block;
	margin: 0;
	white-space: nowrap;
	font-variant: small-caps;
	${(props) => (props.alignment === "left" ? "padding-left: 12rem;" : "")}
	${(props) => (props.alignment === "right" ? "padding-right: 12rem;" : "")}
	&:before {
		content: "";
		position: absolute;
		width: 100%;
		${(props) =>
			props.alignment === "left" ? "width: 100vw; right: 0;" : ""}
		${(props) =>
			props.alignment === "right" ? "width: 100vw; left: 0;" : ""}
		bottom: 0;
		border-bottom: 2px solid black;
	}
	&.loaded {
	}
	@media all and (max-width: 768px) {
		font-size: 5rem;
	}
	span {
		display: inline-block;
	}
	.box-transition {
		/* background: gray; */
		position: absolute;
		z-index: -1;
		/* width: 100%; */
		height: 100%;
		left: 0;
		top: 0;
		&.layer-1 {
			background: #d9d3d0;
		}
		&.layer-2 {
			background: gray;
			/* transition-delay: 0.25s; */
		}
		&.layer-3 {
			background: #464853;
			/* transition-delay: 0.5s; */
		}
	}
`;

Headline.propTypes = {
	text: PropTypes.string,
	loaded: PropTypes.bool,
	className: PropTypes.string,
	alignment: PropTypes.string,
};
