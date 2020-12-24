import React, { Component } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";

class StatBox extends Component {
	render() {
		const { stats } = this.props;
		if (stats === undefined) return <p>Loading</p>;
		const { materials, styles, colors } = stats;

		const colorsArray = Object.entries(colors)
			.slice(0, 10)
			.map((entry) => entry[1]);

		return (
			<StatBoxDiv className="project-stats box col-3">
				<dl>
					{materials !== undefined ? (
						<div>
							<dt>Material</dt>
							<dd>
								{materials.edges.map((material, i) => {
									return (
										<span key={material.node.name}>
											{i !== 0 ? ", " : ""}
											{material.node.name}
										</span>
									);
								})}
							</dd>
						</div>
					) : (
						""
					)}
					{styles !== undefined ? (
						<div>
							<dt>Style</dt>
							<dd>
								{styles.edges.map((style, i) => {
									return (
										<span key={style.node.name}>
											{i !== 0 ? ", " : ""}
											{style.node.name}
										</span>
									);
								})}
							</dd>
						</div>
					) : (
						""
					)}
					{colorsArray[0] !== null ? (
						<div>
							<dt className="color-term">Palette</dt>
							<dd className="color-defintion">
								<ul>
									{colorsArray.map((color, i) => {
										if (color !== null)
											return (
												<li
													key={color}
													className="color-swatch"
													style={{
														background: `${color}`,
													}}
												></li>
											);
									})}
								</ul>
							</dd>
						</div>
					) : (
						""
					)}
				</dl>
			</StatBoxDiv>
		);
	}
}

export default withApollo(StatBox);

const StatBoxDiv = styled.div`
	padding: 1em 1em;
	&.project-stats{
		position: relative;
		max-width: 316px;
		background: linear-gradient(180deg, rgba(236,233,233,1) 0%, rgba(245,242,241,1) 100%);
		box-shadow: 5px 5px 100px -25px rgba(0,0,0,0.25);
		dl{
			margin: 0;
			dt{
			font-weight: bold;
			}
			dd{
			font-style: italic;
			&.color-defintion{
				margin-left: 0;
			}
			}
		}
		}
		ul{
			margin: 0;
			padding: 0;
			li{
				list-style: none;
				margin: 0;
			}
		}
		.color-swatch{
			display: inline-block;
			width: 50px;
			height: 50px;
			margin-right: 10px;
			border-radius: 100%;
			box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.35);
			/* &:first-of-type{
				margin-left: 0;
			} */
		}
	}
`;
