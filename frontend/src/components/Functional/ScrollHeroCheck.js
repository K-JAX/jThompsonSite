import React, { createContext, useContext, useState, useEffect } from "react";

export const ScrollHeroContext = createContext("top");

export const ScrollHeroProvider = (props) => {
	const [position, setPosition] = useState("top");
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.scrollY === 0) {
			setPosition("hero");
		}
		if (window.scrollY > 0 && window.scrollY < 130) {
			setPosition("floating");
		}
		if (window.scrollY >= 130) {
			setPosition("feature");
		}
	};

	return (
		<ScrollHeroContext.Provider value={position}>
			{props.children}
		</ScrollHeroContext.Provider>
	);
};

export const ScrollHeroConsumer = (props) => {
	const value = useContext(ScrollHeroContext);
	// return <p>value is: {value}</p>;
	return <>{props.children}</>;
};

export const ScrollHeroCheck = (props) => {
	return (
		<ScrollHeroProvider>
			<ScrollHeroConsumer />
			{props.children}
		</ScrollHeroProvider>
	);
};

export default ScrollHeroCheck;
