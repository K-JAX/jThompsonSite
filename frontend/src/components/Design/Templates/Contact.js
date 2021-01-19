import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import axios from "axios";
import { Parser as HtmlToReactParser } from "html-to-react";

// Components
import Form from "../Organisms/Form";

/**
 * GraphQL page query that takes a page slug as a uri
 * Returns the title and content of the page
 */
const PAGE_QUERY = gql`
	query PageQuery {
		pageBy(uri: "contact") {
			title
			content
		}
	}
`;

const SEND_MUTATION = gql`
	mutation SEND_EMAIL {
		sendEmail(
			input: {
				to: "kevingarubba@gmail.com"
				from: "test@test.com"
				subject: "test email"
				body: "test email"
				clientMutationId: "test"
			}
		) {
			origin
			sent
			message
		}
	}
`;

/**
 * Fetch and display a Page
 */
class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			page: {
				title: "",
				content: "",
			},
			form: [],
			sendStatus: {},
		};
	}

	componentDidMount() {
		this.executePageQuery();
		// this.sendMail();
		// this.getForm();
	}

	componentDidUpdate(prevProps) {
		const { props } = this;
		if (props.match.params.slug !== prevProps.match.params.slug) {
			this.executePageQuery();
			// this.getForm();
		}
	}

	sendMail = async () => {
		const { client } = this.props;
		const result = await client.mutate({
			mutation: SEND_MUTATION,
		});
		this.setState({ sendStatus: result }, console.log(result));
	};

	getForm = () => {
		// axios
		// 	.get("http://localhost:8080/wp-json/forms/v1/forms/51")
		// 	.then((res) => {
		// 		const form = res.data;
		// 		this.setState({ isLoaded: true, form });
		// 	});
	};

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

	// renderForm = () => {
	//   const {form, isLoaded} = this.state;

	//     form.fields.map((field) => {
	//        return <li>{ field.name }</li>
	//     });
	// }

	render() {
		const { page, form, isLoaded } = this.state;

		var htmlToReactParser = new HtmlToReactParser();
		const parsedContent = htmlToReactParser.parse(page.content);

		return (
			<div style={{ marginLeft: "315px" }}>
				<div className="pa2">
					<h1>{page.title}</h1>
				</div>
				{/* <div>{parsedContent}</div> */}
				{/* <div dangerouslySetInnerHTML={{__html: page.content }} /> */}
				{isLoaded ? <Form data={form} /> : ""}
			</div>
		);
	}
}

export default withApollo(Contact);
