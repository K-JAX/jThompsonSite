import React from "react";

// components
import Headline from "../Atoms/Headline";

export const NotFound = (props) => {
	return (
		<div className="container mb-5">
			<Headline status={props.status} text="Page Not found" />
		</div>
	);
};
export default NotFound;
