import gql from "graphql-tag";

export const HOME_QUERY = gql`
	query MyQuery {
		page(id: "home", idType: URI) {
			uri
			sliderTimer {
				slideshowTimer
				transitionSpeed
			}
		}
	}
`;

export const SITE_STATUS_QUERY = gql`
	query MyQuery {
		siteStatus
	}
`;

export const SITE_SETTINGS_QUERY = gql`
	query MyQuery {
		generalSettings {
			title
			description
		}
		faviconUrl
	}
`;

export const SINGLE_PROJ_QUERY = gql`
	query SingleProjectQuery($slug: ID!) {
		project(id: $slug, idType: URI) {
			id
			slug
			title
			projectId
			featuredImage {
				node {
					sourceUrl(size: MEDIUM)
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
			nodes {
				id
			}
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
			nodes {
				id
			}
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

export const PROJ_TYPE_QUERY = gql`
	query ProjectTypeQuery {
		projectTypes(where: { hideEmpty: true }) {
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

export const PROJ_QUERY = gql`
	query ProjectQuery {
		projects(first: 18) {
			edges {
				node {
					id
					slug
					title
					link
					featuredImage {
						node {
							id
							sourceUrl(size: MEDIUM_LARGE)
						}
					}
				}
			}
		}
	}
`;

export const FILTERED_PROJ_QUERY = gql`
	query ProjectQuery($id: String! = "urban") {
		projects(
			first: 18
			where: {
				taxQuery: {
					taxArray: {
						terms: [$id]
						operator: IN
						field: SLUG
						taxonomy: PROJECTTYPE
					}
				}
			}
		) {
			edges {
				node {
					id
					slug
					title
					link
					featuredImage {
						node {
							id
							sourceUrl(size: MEDIUM_LARGE)
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

export const PAGE_QUERY = gql`
	query PageQuery($uri: String!) {
		pageBy(uri: $uri) {
			title
		}
	}
`;
