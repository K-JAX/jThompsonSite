import React, { Component } from "react";
import styled from "styled-components";

// Components
import Nav from "./Nav";
import Burger from "../Atoms/Burger";

class PulloutMenu extends Component {
	render() {
		const { menuActive, burgerOnClick } = this.props;

		return (
			<Puller>
				<Burger onClick={burgerOnClick} burgerIsActive={menuActive} />
				<Nav className={`pullout ${menuActive ? "pulled-out" : ""}`}>
					<div className="transition layer-1" />
					<div className="transition layer-2" />
					<div className="transition layer-3" />
				</Nav>
			</Puller>
		);
	}
}

export default PulloutMenu;

const Puller = styled.div`
	display: flex;
	justify-self: flex-end;
	align-self: center;
	margin-left: auto;
	.pullout {
		position: fixed;
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
		top: 0;
		right: -100%;
		padding: 0;
		opacity: 1;
		transition: right 0s 0.85s, opacity 1s;
		.transition {
			position: absolute;
			z-index: -2;
			right: -200%;
			top: 0;
			width: 100%;
			height: 100%;
			transition: 0.85s;
		}
		.layer-1 {
			background: #d9d3d0;
			transition-delay: 0.2s;
		}
		.layer-2 {
			background: gray;
			transition-delay: 0.1s;
		}
		.layer-3 {
			background: #464853;
			transition-delay: 0;
		}
		a {
			font-size: 48px;
			text-align: center;
		}

		&.pulled-out {
			opacity: 1;
			right: 0;
			transition: right 0s, opacity 1s;
			a {
				margin-left: 10px;
			}
			.transition {
				right: 0;
			}
			.layer-1 {
				transition-delay: 0s;
			}
			.layer-2 {
				transition-delay: 0.1s;
			}
			.layer-3 {
				transition-delay: 0.2s;
			}
		}
	}
`;
