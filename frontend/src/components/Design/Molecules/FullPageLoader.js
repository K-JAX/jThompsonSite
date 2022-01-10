import styled from "styled-components";

import Loader from "../Atoms/Loader";

const FullPageLoader = (props) => {
	return (
		<FullPageDiv>
			<Loader />
		</FullPageDiv>
	);
};

export default FullPageLoader;

const FullPageDiv = styled.div`
	position: relative;
	z-index: 3;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-content: center;
`;
