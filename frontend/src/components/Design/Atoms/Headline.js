import React, { useState, useEffect, useMemo } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Children } from "react";
import { useSpring, useTrail, animated, useTransition } from "react-spring";

const Headline = (props) => {
	const { text, loaded, className, alignment } = props;
	const [up, set] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
		isLoaded && !up ? set((a) => !a) : "";
	});

	const chars = useMemo(() => text.split(""), [text]);

	const spring = useSpring({
		from: { opacity: 0 },
		to: async (next) => {
			// Create a delayed animation
			await next({
				opacity: up ? 1 : 0.5,
				color: "#fff",
			}); // 2 seconds
			await new Promise((resolve) => setTimeout(resolve, 400));

			// Immediately override the width animation
			await next({ color: "#000" }); // This creates a new animation which starts immediately,
			// and it prevents the delayed animation from changing
			// the width. The height will still animate in 2 seconds.
		},
		config: { tension: 250 },
	});

	const trail = useTrail(chars.length, {
		config: { mass: 5, tension: 1800, friction: 140 },
		y: up ? 0 : 50,
	});

	// const stuff = [0, 1, 2];
	const [items, setItems] = useState([0, 1, 2]);

	const boxTransitions = useTransition(items, (item) => item, {
		from: { width: `0%`, left: "-10%", right: "110%" },
		enter: (item) => async (next, cancel) => {
			await next({ width: `100%`, left: "0%", right: "100%" });
			await next({ width: `0%`, left: `110%`, right: `0%` });
		},
		leave: { width: "100%" },
		trail: 200,
	});

	return (
		<HeadlineH1
			className={`page-heading ${className} ${loaded ? "loaded" : ""}`}
			alignment={alignment}
		>
			{trail.map(({ y, ...rest }, index) => (
				<animated.span
					key={index}
					style={{
						...rest,
						...spring,
						transform: y.interpolate(
							(y) => `translate3d(0,${y}px,0)`
						),
					}}
				>
					{chars[index]}
				</animated.span>
			))}
			<div>
				{boxTransitions.map(({ item, key, props }, i) => (
					<animated.div
						key={i}
						num={i}
						className={`box-transition layer-${i + 1} `}
						style={props}
					/>
				))}
			</div>
			{/* <animated.div
				style={boxSpring}
				className="box-transition layer-1"
			/>
			<animated.div
				style={boxSpring}
				className="box-transition layer-2"
			/>
			<animated.div
				style={boxSpring}
				className="box-transition layer-3"
			/> */}
		</HeadlineH1>
	);
};

export default withApollo(Headline);

const HeadlineH1 = styled.h1`
	position: relative;
	justify-self: end;
	font-size: 8.25rem;
	font-weight: 100;
	height: auto;
	display: inline-block;
	margin: 0;
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
