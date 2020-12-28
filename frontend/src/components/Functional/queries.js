import gql from "graphql-tag";

export const SINGLE_PROJ_QUERY = gql`
	query ProjectQuery($uri: String!) {
		projectBy(uri: $uri) {
			id
			slug
			title
			projectId
			featuredImage {
				sourceUrl
				altText
			}
			content
			colorPalette {
				colorone
				colortwo
				colorthree
				colorfour
				colorfive
				colorsix
				colorseven
				coloreight
				colornine
				colorten
			}
			projectMainDetails {
				fieldGroupName
				galleryOrDescriptive
			}
			additionalProjectDetails {
				featuredImages {
					id
					srcSet(size: LARGE)
					altText
				}
				showStatBox
				location {
					city
					stateShort
				}
			}
			date
			projectSummary
			projectTypes {
				edges {
					node {
						name
					}
				}
			}
			materials {
				edges {
					node {
						name
					}
				}
			}
			styles {
				edges {
					node {
						name
					}
				}
			}
		}
	}
`;

export const FEATURED_PROJ_QUERY = gql`
	query ProjectQuery {
		projects(
			where: {
				metaQuery: {
					metaArray: {
						key: "is_project_featured"
						value: "1"
						type: BINARY
					}
				}
			}
		) {
			edges {
				node {
					id
					slug
					title
					projectId
					featuredImage {
						node {
							sourceUrl
							srcSet
							altText
						}
					}
					content
					colorPalette {
						colorone
						colortwo
						colorthree
						colorfour
						colorfive
						colorsix
						colorseven
						coloreight
						colornine
						colorten
					}
					date
					projectSummary
					projectTypes {
						edges {
							node {
								name
							}
						}
					}
					materials {
						edges {
							node {
								name
							}
						}
					}
					styles {
						edges {
							node {
								name
							}
						}
					}
					projectMainDetails {
						fieldGroupName
						galleryOrDescriptive
					}
					additionalProjectDetails {
						featuredImages {
							id
							srcSet(size: LARGE)
							altText
						}
						showStatBox
						location {
							city
							stateShort
						}
					}
				}
			}
		}
	}
`;
