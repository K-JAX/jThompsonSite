import React, { createContext, useContext, useState, useEffect } from "react";
import { withBreakpoints } from "react-breakpoints";
import { compose } from "recompose";

export const ScrollHeroContext = createContext();

export const ScrollHeroProvider = withBreakpoints((props) => {
	const [position, setPosition] = useState("hero");
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		const { breakpoints, currentBreakpoint } = props;
		// console.log(props.breakpoints.md);
		let scrollPast =
			breakpoints[currentBreakpoint] > breakpoints.md ? 130 : 80;
		// let scrollPast = 130;
		if (window.scrollY === 0) {
			setPosition("hero");
		}
		if (window.scrollY > 0 && window.scrollY < scrollPast) {
			setPosition("floating");
		}
		if (window.scrollY >= scrollPast) {
			setPosition("feature");
		}
	};
	return (
		<ScrollHeroContext.Provider value={position}>
			{props.children}
		</ScrollHeroContext.Provider>
	);
});

export const ScrollHeroConsumer = (props) => {
	const value = useContext(ScrollHeroContext);

	return <>{props.children}</>;
};

export const ScrollHeroCheck = (props) => {
	console.log("new test");

	return (
		<ScrollHeroProvider>
			<ScrollHeroConsumer />
			{props.children}
		</ScrollHeroProvider>
	);
};

export default compose(withBreakpoints)(ScrollHeroCheck);
