import logo from "../../images/logo.png";
import React, { useState } from "react";

import { useIntl } from "react-intl";

import "./Contact.css";

export default function Contact() {
	const intl = useIntl();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	return (
		<div className={"contactContainer"}>
			<h1>Contact Us</h1>
			<p>
				Have questions about our programs or Connect MNG in general? Please submit the form below and we'll be in touch shortly!
			</p>
			<h3>YOUR NAME</h3>
			<div className={"inputContainer"}>
				<input value={firstName} placeholder={"First name"} onChange={(event) => setFirstName(event.target.value)}/>
				<input value={lastName} placeholder={"Last name"} onChange={(event) => setLastName(event.target.value)}/>
			</div>
			<div className={"inputContainer"}>
				<div>
					<h3>EMAIL</h3>
					<input value={email} placeholder={"Email address"} onChange={(event) => setEmail(event.target.value)}/>
				</div>
				<div>
					<h3>SUBJECT</h3>
					<input value={subject} placeholder={"Email subject"} onChange={(event) => setSubject(event.target.value)}/>
				</div>
			</div>
			<div>
				<h3>MESSAGE</h3>
				<div className={"textArea"}>
					<textarea value={message} placeholder={"Your message"} onChange={(event) => setMessage(event.target.value)}/>
				</div>
			</div>
			<div>
				<button className={"submitButton"}>
					Get in touch!
				</button>
			</div>
		</div>
	);
};