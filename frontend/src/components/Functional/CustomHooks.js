import React, { useState } from "react";

const useSignUpForm = (callback) => {
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
export default useSignUpForm;
