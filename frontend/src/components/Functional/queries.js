import gql from "graphql-tag";

export const SINGLE_PROJ_QUERY = gql`
	query SingleProjectQuery($slug: ID!) {
		project(id: $slug, idType: URI) {
			id
			slug
			title
			projectId
			featuredImage {
				node {
					sourceUrl(size: LARGE)
					srcSet
					altText
					id
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
			projectMainDetails {
				fieldGroupName
				galleryOrDescriptive
				showSlideshowOnProjectPage
				slideshowTimer
				transitionSpeed
			}
			additionalProjectDetails {
				featuredImages {
					id
					sourceUrl(size: LARGE)
					srcSet
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
	query FeaturedProjectQuery {
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
							id
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

export const PRESS_QUERY = gql`
	query PressQuery {
		__typename
		pressArticles {
			edges {
				node {
					title
					link
					featuredImage {
						node {
							altText
							sourceUrl(size: LARGE)
						}
					}
					acf {
						fieldGroupName
						ctaText
						externalLinkOrPdf
						externalLink {
							url
							title
						}
						pdfUpload {
							mediaItemUrl
							mediaDetails {
								file
							}
						}
					}
				}
			}
		}
	}
`;

export const SINGLE_PRESS_QUERY = gql`
	query SinglePressQuery($slug: ID!) {
		pressArticle(id: $slug, idType: URI) {
			id
			slug
			title
			acf {
				pdfUpload {
					mediaItemUrl
				}
			}
		}
	}
`;
