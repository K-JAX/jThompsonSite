import React, { Component } from "react";
import { withApollo } from "react-apollo";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import styled from "styled-components";

// Component
import Headline from "../Atoms/Headline";
import FigureLink from "../Organisms/FigureLink";
import ProjectSingle from "./Project-Single";
import Loader from "../Atoms/Loader";
/**
 * GraphQL page query that takes a page slug as a uri
 * Returns the title and content of the page
 */
const PAGE_QUERY = gql`
	query PageQuery {
		pageBy(uri: "portfolio") {
			title
		}
	}
`;

const PROJ_TYPE_QUERY = gql`
	query ProjectTypeQuery {
		projectTypes {
			edges {
				node {
					id
					slug
					name
				}
			}
		}
	}
`;

const PROJ_QUERY = gql`
	query ProjectQuery {
		projects {
			edges {
				node {
					id
					slug
					title
					link
				}
			}
		}
	}
`;

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
			this.executePageQuery();
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
			uri = "welcome";
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

	render() {
		const { page, projectTypes, projects, isLoaded } = this.state;

		if (!isLoaded) return <Loader />;
		console.log(`projects`);

		return (
			<PortfolioTemplate className="template-container">
				<h1>{page.title}</h1>
				<nav>
					<ul>
						{projectTypes.map((type, index) => (
							<li key={type.node.id}>
								<button className="no-style">
									{type.node.name}
								</button>
							</li>
						))}
					</ul>
				</nav>
				<nav>
					<ul>
						{projects.map((project, index) => {
							return (
								<li key={project.node.id}>
									<Link
										to={project.node.link}
										alt={`View the ${project.node.title} project.`}
									>
										{project.node.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</PortfolioTemplate>
		);
	}
}

export default withApollo(Portfolio);

const PortfolioTemplate = styled.main`
	nav {
		ul {
			list-style: none;
			li {
				a {
					text-decoration: none;
				}
			}
		}
	}
`;
