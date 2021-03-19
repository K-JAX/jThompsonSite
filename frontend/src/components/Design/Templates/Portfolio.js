import React, { Component } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";
import { motion } from "framer-motion";

// Component
import Headline from "../Atoms/Headline";
import { Button } from "../Atoms/Button";
import { ProjectThumb } from "../Molecules/ProjectThumb";
import Loader from "../Atoms/Loader";
import { NoDataMessage } from "../Atoms/NoDataMessage";
import {
	PAGE_QUERY,
	PROJ_TYPE_QUERY,
	PROJ_QUERY,
	FILTERED_PROJ_QUERY,
} from "../../Functional/queries";
/**
 * GraphQL page query that takes a page slug as a uri
 * Returns the title and content of the page
 */

/**
 * Fetch and display a Page
 */
class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: {
				title: "",
				content: "",
			},
			isLoaded: false,
			projectTypes: [],
			projects: [],
			active: "all",
		};
	}

	componentDidMount() {
		this.executePageQuery();
		this.executeProjectQuery();
		this.executeProjectTypeQuery();
	}

	componentDidUpdate(prevProps) {
		const { props } = this;
		if (props.match.params.slug !== prevProps.match.params.slug) {
			this.executeProjectQuery();
			this.executeProjectTypeQuery();
		}
	}

	/**
	 * Execute page query, process the response and set the state
	 */
	executePageQuery = async () => {
		const { match, client } = this.props;
		let uri = match.params.slug;
		if (!uri) {
			// uri = "portfolio";
			uri = match.path.replace("/", "");
		}
		const result = await client.query({
			query: PAGE_QUERY,
			variables: { uri },
		});
		const page = result.data.pageBy;
		this.setState({ page });
	};

	executeProjectQuery = async () => {
		const { client } = this.props;
		const result = await client.query({
			query: PROJ_QUERY,
		});
		let projects = result.data.projects.edges;
		projects = projects.map((project) => {
			const finalLink = `/portfolio/${project.node.slug}`;
			const modifiedProject = { ...project };
			modifiedProject.node.link = finalLink;
			return modifiedProject;
		});
		this.setState({ projects, isLoaded: true });
	};
	executeProjectTypeQuery = async () => {
		const { client } = this.props;
		const result = await client.query({
			query: PROJ_TYPE_QUERY,
		});
		let projectTypes = result.data.projectTypes.edges;
		projectTypes = projectTypes.map((project) => {
			const finalLink = `/portfolio/${project.node.slug}`;
			const modifiedProject = { ...project };
			modifiedProject.node.link = finalLink;
			return modifiedProject;
		});
		this.setState({ projectTypes });
	};

	filterSelection = async (id) => {
		// console.log("calling the filter function with " + id);
		this.setState({ projects: [], active: id });

		const { client } = this.props;
		let query = id === "all" ? PROJ_QUERY : FILTERED_PROJ_QUERY;

		const result = await client.query({
			query: query,
			variables: { id },
		});
		let projects = result.data.projects.edges;
		// if (projects.length !== 0) {
		// 	console.log("full");
		// } else {
		// 	console.log("empty");
		// }
		projects = projects.map((project) => {
			const finalLink = `/portfolio/${project.node.slug}`;
			const modifiedProject = { ...project };
			modifiedProject.node.link = finalLink;
			return modifiedProject;
		});
		this.setState({ projects });
	};

	handleClick = (e) => {
		this.filterSelection(e.target.id);
	};

	render() {
		const { page, projectTypes, isLoaded } = this.state;
		let { projects, active } = this.state;
		const { status } = this.props;

		if (!isLoaded) return <Loader />;

		let projectElements;
		if (projects.length === 0) {
			projectElements = (
				<NoDataMessage text={"No projects under this category :("} />
			);
		} else {
			projectElements = projects.map((project, index) => {
				return (
					<ProjectThumb
						key={project.node.id}
						project={project}
						className="mr-1 mr-lg-2 mb-lg-2"
						delay={index / 5}
						status={status}
					/>
				);
			});
		}

		return (
			<PortfolioTemplate className="container-fluid px-4 px-lg-0 pl-lg-5">
				<div className="row flex-lg-nowrap">
					<motion.div
						className="sidebar p-3"
						initial={{ x: "-150%" }}
						animate={{
							x: `${status === "entered" ? "0%" : "-150%"}`,
						}}
						transition={{
							duration: 0.5,
						}}
					>
						{/* <h1>{page.title}</h1> */}
						<Headline
							size="small"
							text={page.title}
							className="mb-4"
							alignment="left"
						/>
						<nav>
							<h2 className="h6 mb-4 mb-lg-1">
								<u>Project Type</u>
							</h2>
							<ul
								className="filter-list pl-0 list-unstyled row mx-0 flex-lg-column flex-row flex-nowrap"
								style={{ width: "100%", overflowX: "auto" }}
							>
								<li>
									<button
										id="all"
										className={`no-style-lg px-3 px-lg-0 mx-1 ${
											active === "all" && "active"
										}`}
										onClick={this.handleClick}
									>
										All
									</button>
								</li>
								{projectTypes.map((type, index) => (
									<li key={type.node.id} id={type.node.id}>
										<button
											id={type.node.slug}
											className={`no-style-lg px-3 px-lg-0 mx-1 ${
												active === type.node.slug &&
												"active"
											}`}
											onClick={this.handleClick}
										>
											{type.node.name}
										</button>
									</li>
								))}
							</ul>
						</nav>
					</motion.div>
					<div className="w-100 mt-lg-5 pt-lg-3 px-4 px-lg-2 d-flex justify-content-center justify-content-lg-start">
						<ul className="project-list row list-unstyled">
							{projectElements}
						</ul>
					</div>
				</div>
			</PortfolioTemplate>
		);
	}
}

export default withApollo(Portfolio);

const PortfolioTemplate = styled.main`
	.sidebar {
		width: 250px;
		@media all and (max-width: 991px) {
			width: 100%;
		}
		nav {
			ul {
				li {
					button {
						opacity: 0.5;
						&.active {
							opacity: 1;
							@media all and (max-width: 991px) {
								background: #464853;
								color: white;
							}
						}
					}
				}
			}
		}
	}
	.project-list {
		width: 100%;
	}
`;
