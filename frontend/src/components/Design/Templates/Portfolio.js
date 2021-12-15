import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery, useLazyQuery } from "react-apollo";
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

const Portfolio = (props) => {
	const [active, setActive] = useState("all");
	const { pathname } = useLocation();
	const uri = pathname.replace("/", "");
	const { status } = props;

	const updateLinks = (projectData) => {
		let modifiedProjectData = projectData.map((project) => {
			const finalLink = `/portfolio/${project.node.slug}`;
			const modifiedProject = { ...project };
			modifiedProject.node.link = finalLink;
			return modifiedProject;
		});
		return modifiedProjectData;
	};

	const resetFilter = () => {
		setProjects(initProjects);
		setActive("all");
	};
	const [filterSelection, { loading, error, data }] = useLazyQuery(
		FILTERED_PROJ_QUERY,
		{
			onCompleted: (data) => {
				setProjects(updateLinks(data.projects.edges));
			},
		}
	);

	let page = { title: "", content: "" };
	const [projects, setProjects] = useState([]);
	const [initProjects, setInitProjects] = useState([]);
	const [projectTypes, setProjectTypes] = useState([]);
	const pageResp = useQuery(PAGE_QUERY, {
		variables: { uri },
	});

	const projResp = useQuery(PROJ_QUERY, {
		onCompleted: (data) => {
			setInitProjects(updateLinks(data.projects.edges));
			setProjects(updateLinks(data.projects.edges));
		},
	});
	const projTypeResp = useQuery(PROJ_TYPE_QUERY, {
		onCompleted: (data) => {
			setProjectTypes(updateLinks(data.projectTypes.edges));
		},
	});
	// console.log(pageResp.data);

	if (pageResp.loading || projResp.loading || projTypeResp.loading || loading)
		return <Loader />;
	if (pageResp.error || projResp.error || projTypeResp.error || error)
		return `Error! ${pageResp.error} ${projResp.error} ${projTypeResp.error} `;
	page = {
		title: pageResp.data.pageBy.title,
		content: pageResp.data.pageBy.content,
	};

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
					className="me-1 me-lg-2 mb-lg-2"
					delay={index / 5}
					status={status}
				/>
			);
		});
	}

	return (
		<PortfolioTemplate className="container-fluid px-4 px-lg-0 pl-lg-5">
			<div className="d-flex flex-lg-row flex-column flex-lg-nowrap">
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
						status={status}
						className="mb-4"
						alignment="left"
					/>
					<nav>
						<h2 className="h6 mb-4 mb-lg-1">
							<u>Project Type</u>
						</h2>
						<ul
							className="filter-list pl-0 list-unstyled d-flex flex-row mx-0 flex-lg-column flex-row flex-nowrap"
							style={{ width: "100%", overflowX: "auto" }}
						>
							<li key="all" id="all">
								<button
									id="all"
									className={`no-style-lg px-3 px-lg-0 mx-1 ${
										active === "all" && "active"
									}`}
									onClick={resetFilter}
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
										onClick={() => {
											filterSelection({
												variables: {
													id: type.node.slug,
												},
											});
											setActive(type.node.slug);
										}}
									>
										{type.node.name}
									</button>
								</li>
							))}
						</ul>
					</nav>
				</motion.div>
				<div className="w-100 mw-0 mt-lg-5 pt-lg-3 px-4 px-lg-2 d-flex justify-content-center justify-content-lg-start">
					<ul className="project-list flex-wrap list-unstyled">
						{projectElements}
					</ul>
				</div>
			</div>
		</PortfolioTemplate>
	);
};

export default Portfolio;

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
		display: flex;
		justify-content: flex-start;
	}
`;
