import React from "react";
import styled from "styled-components";

const Loader = (props) => {
	const { className } = props;
	return (
		<div className="d-flex w-100 h-100 justify-content-center align-content-center align-items-center loader-container">
			<LoaderDiv className={`${className}`} />
		</div>
	);
};
export default Loader;

const LoaderDiv = styled.div`
	position: relative;
	width: 40px;
	height: 40px;
	border: 6px solid #ccc;
	border-left: 7px solid #464853;
	border-radius: 300px;
	animation: spin 1s infinite;
	@keyframes spin {
		0% {
			transform: rotate(80deg);
		}
		100% {
			transform: rotate(440deg);
		}
	}
`;
