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
			<h1>{intl.formatMessage({id: "contactUs"})}</h1>
			<p>
				{intl.formatMessage({id: "contactDesc"})}
			</p>
			<h3>{intl.formatMessage({id: "yourName"}).toUpperCase()}</h3>
			<div className={"inputContainer"}>
				<input value={firstName} placeholder={intl.formatMessage({id: "firstName"})} onChange={(event) => setFirstName(event.target.value)}/>
				<input value={lastName} placeholder={intl.formatMessage({id: "lastName"})} onChange={(event) => setLastName(event.target.value)}/>
			</div>
			<div className={"inputContainer"}>
				<div>
					<h3>{intl.formatMessage({id: "email"}).toUpperCase()}</h3>
					<input value={email} placeholder={intl.formatMessage({id: "emailAddress"})} onChange={(event) => setEmail(event.target.value)}/>
				</div>
				<div>
					<h3>{intl.formatMessage({id: "subject"}).toUpperCase()}</h3>
					<input value={subject} placeholder={intl.formatMessage({id: "emailSubject"})} onChange={(event) => setSubject(event.target.value)}/>
				</div>
			</div>
			<div>
				<h3>{intl.formatMessage({id: "message"}).toUpperCase()}</h3>
				<div className={"textArea"}>
					<textarea value={message} placeholder={intl.formatMessage({id: "yourMessage"})} onChange={(event) => setMessage(event.target.value)}/>
				</div>
			</div>
			<div>
				<button className={"submitButton"}>
					{intl.formatMessage({id: "getInTouch"}).toUpperCase()}
				</button>
			</div>
		</div>
	);
};