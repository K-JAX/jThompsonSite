import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery, useLazyQuery } from "react-apollo";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import gql from "graphql-tag";

// Component
import Headline from "../Atoms/Headline";
import ProjectThumb from "../Molecules/ProjectThumb";
import Loader from "../Atoms/Loader";
import NoDataMessage from "../Atoms/NoDataMessage";
import GiantLetters from "../Molecules/GiantLetters";
import SidebarFilter from "../Molecules/SidebarFilter";
import {
	PAGE_QUERY,
	PROJ_TYPE_QUERY,
	PROJ_QUERY,
	FILTERED_PROJ_QUERY,
} from "../../Functional/queries";

const Portfolio = (props) => {
	const [active, setActive] = useState("all");
	const { pathname } = useLocation();
	const [uri, setUri] = useState(pathname.replace("/", ""));
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

	const [filterSelection, { data }] = useLazyQuery(FILTERED_PROJ_QUERY, {
		onCompleted: (data) => {
			setProjects(updateLinks(data.projects.edges));
		},
	});
	const onFilterClick = (filterId) => {
		filterSelection({
			variables: {
				id: filterId,
			},
		});
		setActive(filterId);
	};

	let page = { title: "", content: "" };
	const [projects, setProjects] = useState([]);
	const [initProjects, setInitProjects] = useState([]);
	const [projectTypes, setProjectTypes] = useState([]);
	const pageResp = useQuery(PAGE_QUERY, {
		variables: { uri: uri },
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

	if (pageResp.loading || projResp.loading || projTypeResp.loading)
		return <Loader />;
	if (pageResp.error || projResp.error || projTypeResp.error)
		return `Error! ${pageResp.error} ${projResp.error} ${projTypeResp.error} `;
	page = {
		title: pageResp.data.pageBy.title,
		content: pageResp.data.pageBy.content,
	};

	const filterSidebarVariants = {
		initial: { x: "-150%" },
		moveIn: { x: "0%", transition: { type: "tween", duration: 0.5 } },
		moveOut: { x: "-150%", transition: { type: "tween", duration: 0.25 } },
	};

	return (
		<PortfolioTemplate className="container-fluid px-4 px-lg-0 pl-lg-5">
			<div className="d-flex flex-lg-row flex-column flex-lg-nowrap ">
				<div className="sidebar">
					<Headline
						size="small"
						text={page.title}
						status={status}
						className="mb-4"
						alignment="left"
					/>
					<AnimatePresence>
						{status == "entered" && (
							<motion.div
								variants={filterSidebarVariants}
								initial="initial"
								animate="moveIn"
								exit="moveOut"
							>
								<SidebarFilter
									projectTypes={projectTypes}
									resetFilter={resetFilter}
									active={active}
									onClick={onFilterClick}
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				<div className="w-100 mw-0 mt-lg-5 pt-lg-3 px-4 px-lg-2 d-flex justify-content-center justify-content-lg-start">
					<ul className="project-list flex-wrap list-unstyled">
						{projects.map((project, index) => {
							return (
								<ProjectThumb
									key={project.node.id}
									project={project}
									className="me-1 me-lg-2 mb-1 mb-lg-2"
									delay={index / 5}
									status={status}
								/>
							);
						})}
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
		padding: 3.45em 2.5em;
		@media all and (max-width: 991px) {
			width: 100%;
			padding: 0.75em 1em;
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
