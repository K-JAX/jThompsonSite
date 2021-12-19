import React, { Component } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Config from "../../../config";
import { motion, AnimatePresence } from "framer-motion";

// components
import CaptionBox from "../Molecules/CaptionBox";

class FigureLink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovered: false,
		};
	}

	addHover = () => {
		this.setState({
			isHovered: true,
		});
	};

	removeHover = () => {
		this.setState({
			isHovered: false,
		});
	};

	render() {
		const { isHovered } = this.state;
		const {
			alignment,
			className,
			captionTitle,
			captionDescription,
			img,
			link,
		} = this.props;

		let slugPath;
		if (link.url.startsWith(Config.baseUrl) || link.url.startsWith("/")) {
			slugPath = link.url.replace(Config.baseUrl, "");
		} else {
			slugPath = link.url;
		}

		return (
			<AnimatePresence>
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 100, opacity: 0 }}
					transition={{ type: "tween", delay: 1 }}
				>
					<Figure
						className={`row mb-5 ${className} ${
							alignment === "left" ? "left" : "right"
						}`}
						onMouseEnter={() => this.addHover()}
						onMouseLeave={() => this.removeHover()}
						onFocus={() => this.addHover()}
					>
						<Link
							className="col-12 col-md-6 px-0 px-md-4 d-flex justify-content-end align-content-end"
							to={slugPath}
						>
							<img className="py-4" src={img} />
						</Link>
						<CaptionBox
							className="col-12 col-md-6 px-0"
							isHovered={isHovered}
							alignment={alignment}
							link={link}
						>
							<h3 className="h2 font-weight-lighter">
								{captionTitle}
							</h3>
							<p>{captionDescription}</p>
						</CaptionBox>
					</Figure>
				</motion.div>
			</AnimatePresence>
		);
	}
}

export default withApollo(FigureLink);

FigureLink.propTypes = {
	alignment: PropTypes.string,
	captionTitle: PropTypes.string,
	captionDescription: PropTypes.string,
	img: PropTypes.string,
	link: PropTypes.object,
};

const Figure = styled.figure`
	height: 100%;
	margin: 0;
	padding: 0;
	min-height: 300px;
	img {
		object-fit: cover;
	}
	&.left {
		flex-direction: row;
	}
	&.right {
		flex-direction: row-reverse;
	}
`;
