import { useState, useRef, useEffect } from "react";

export const useSignUpForm = (callback) => {
	const [inputs, setInputs] = useState({ value: "", valid: false });

	const handleSubmit = (event) => {
		if (event) {
			event.preventDefault();
		}

		callback();
	};
	const handleInputChange = (event) => {
		event.persist();
		// console.log(inputs);
		setInputs((inputs) => ({
			...inputs,
			[event.target.name]: {
				value: event.target.value,
				valid: event.target.value !== "" ? true : false,
			},
		}));
	};
	return {
		handleSubmit,
		handleInputChange,
		inputs,
	};
};

export const usePrevLocation = (location) => {
	const prevLocRef = useRef(location);

	useEffect(() => {
		prevLocRef.current = location;
	}, [location]);

	return prevLocRef.current;
};
