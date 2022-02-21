import React, { useState } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";

const Form = (props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm(); // initialize the hook
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const recaptchaRef = React.useRef();
	const [verified, setVerified] = useState(false);
	const [sendStatus, setSendStatus] = useState({});

	const onSubmit = async (data) => {
		const recaptchaValue = recaptchaRef.current.getValue();

		// const { name, email, message } = data;
		const { client } = props;
		const result = await client.mutate({
			mutation: SEND_MUTATION,
			variables: {
				email,
				message: `Message from ${name}: <br/> ${message}`,
			},
		});
		setSendStatus(result);
		console.log(result);
		recaptchaRef.current.reset();
	};

	const SEND_MUTATION = gql`
		mutation SEND_EMAIL($email: String!, $message: String!) {
			sendEmail(
				input: {
					from: $email
					to: "joe@jthompsonarch.com, kevingarubba@gmail.com"
					body: $message
					subject: "Contact message from jthompsonarch.com"
				}
			) {
				message
				origin
				sent
			}
		}
	`;

	// const { inputs, handleInputChange, handleSubmit } = useSignUpForm(onSubmit);

	const onChange = (value) => {
		setVerified(true);
	};
	const { className } = props;
	// if (!data) return <p>Loading</p>;
	return (
		<StyledForm
			className={`${className && className}  py-4`}
			onSubmit={handleSubmit(onSubmit)}
		>
			{/* <div
				key={`field-${field.label.toLowerCase()}`}
				className={`my-3 ${
					field.type === "submit" ? "col-4" : "col-12"
				}`}
			>
				<label
					className={`col-12 ${
						errors[field.label.toLowerCase()] && "error"
					}`}
				>
					{field.name && "Name field required"}
					<div className="col-12 mb-1">
						<b>{field.label !== "Submit" && field.label}</b>
						{field.required && (
							<span className="text-danger">*</span>
						)}
					</div>
					{field.type !== "textarea" && field.type !== "submit" && (
						<>
							<input
								name={field.label.toLowerCase()}
								className="col-12 pt-2 pb-3"
								placeholder={field.label}
								{...register(field.label.toLowerCase(), {
									required: field.required,
								})}
							/>
							{errors[field.label.toLowerCase()] &&
								`${field.label} is required.`}
						</>
					)}
					{field.type === "textarea" && (
						<>
							<textarea
								name={field.label.toLowerCase()}
								className="col-12 py-3"
								rows={6}
								placeholder={"Type here..."}
								{...register(field.label.toLowerCase(), {
									required: field.required,
								})}
							></textarea>
							{errors[field.label.toLowerCase()] &&
								`${field.label} is required.`}
						</>
					)}
					{field.type === "submit" && (
						<input
							className="theme-btn"
							type="submit"
							value="Submit"
							disabled={!verified}
						/>
					)}
				</label>
			</div> */}
			<div className={`my-3 col-12"`}>
				<label htmlFor="name">Your name</label>
				<input
					className="col-12 pt-2 pb-3"
					name="name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</div>
			<div>
				<label htmlFor="email">Your email</label>
				<input
					className="col-12 pt-2 pb-3"
					name="email"
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>

			<div>
				<label htmlFor="message">Your message</label>
				<textarea
					name="message"
					className="col-12 py-3"
					cols="30"
					rows="6"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				></textarea>
			</div>
			<input
				type="submit"
				value="Submit"
				className="theme-btn"
				disabled={!verified}
			/>
			<div className="col-6 pb-5 mt-1 mb-5">
				<ReCAPTCHA
					ref={recaptchaRef}
					sitekey="6LfP1moaAAAAACGSmQOpfCdJSus1QKoJ8tpkO-v6"
					onChange={onChange}
				/>
			</div>
		</StyledForm>
	);
};

export default withApollo(Form);

const StyledForm = styled.form`
	background: rgb(226, 223, 223);
	background: linear-gradient(
		180deg,
		rgba(226, 223, 223, 0.55) 0%,
		rgba(245, 242, 241, 0.55) 100%
	);
	label {
		position: relative;
		input:not([type="submit"]),
		textarea {
			background: transparent;
			border: none;
			border-bottom: 2px solid gray;
			font-size: 1.35em;
			&::placeholder {
				font-style: italic;
			}
		}
		textarea {
			background: #fdfdfd;
		}
		&.error {
			&:after {
				width: 100%;
			}
		}
		&:after {
			content: "";
			position: absolute;
			width: 0;
			height: 2px;
			background: red;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
		}
	}
`;
