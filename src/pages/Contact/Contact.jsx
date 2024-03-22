import logo from "../../images/logo.png";
import React from "react";

import { useIntl } from "react-intl";

import "./Contact.css";

export default function Contact() {
	const intl = useIntl();

	return (
		<div className={"contactContainer"}>
			<h1>Contact Us</h1>
			<p>
				Have questions about our programs or Connect MNG in general? Please submit the form below and we'll be in touch shortly!
			</p>
			<h3>Your Name</h3>
			<div>
				<h3>Email</h3>
				<h3>Subject</h3>
			</div>
			<h3>Message</h3>
			<button>Get in touch!</button>
		</div>
	);
};