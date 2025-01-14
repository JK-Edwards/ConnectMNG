import logo from "../../images/logo.png";
import React, { useState } from "react";

import { useIntl } from "react-intl";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./Contact.css";

export default function Contact() {
	const intl = useIntl();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [emailError, setEmailError] = useState("");

	const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);

        if (value && !validateEmail(value)) {
            setEmailError(intl.formatMessage({ id: "Invalid Email" }));
        } else {
            setEmailError("");
        }
    };

    const handleSubmit = () => {
        if (!email || emailError) {
            Swal.fire({
                icon: "error",
                title: intl.formatMessage({ id: "Invalid Email" }),
                text: intl.formatMessage({ id: "Invalid Email Message" }),
            });
            return;
        }
        if (!firstName || !lastName || !message) {
            Swal.fire({
                icon: "error",
                title: intl.formatMessage({ id: "Fill Required Fields" }),
                text: intl.formatMessage({ id: "Please Fill All Fields" }),
            });
            return;
        }

        // Sending email using EmailJS
        const templateParams = {
            to_name:"ConnectMNG",
            from_name: `${firstName} ${lastName}`,
            from_email: email,
            subject: subject,
            message: message,
        };

        emailjs
            .send(
                "service_g082yv8", // EmailJS Service ID
                "template_jhe281c", // EmailJS Template ID
                templateParams,
                "O6pJDJsUT4I2tB8Xs" // EmailJS Public Key
            )
            .then(() => {
                    Swal.fire({
                        icon: "success",
                        title: intl.formatMessage({ id: "Email Sent Success"}),
                        text: intl.formatMessage({ id: "We Will Get In Touch" }),
                    });
                    // Reset form fields
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                })
                .catch(() => {
                    Swal.fire({
                        icon: "error",
                        title: intl.formatMessage({ id: "Email Sent Error"}),
                        text: intl.formatMessage({ id: "Please Try Again" }),
                    });
                });
            };
    

	
return (
    <div className="contactContainer">
            <h1>{intl.formatMessage({ id: "contactUs" })}</h1>
            <p>{intl.formatMessage({ id: "contactDesc" })}</p>
            <form onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <div>
                        <label htmlFor="firstName">{intl.formatMessage({ id: "firstName" })}</label>
                        <input
                            id="firstName"
                            type="text"
                            value={firstName}
                            placeholder={intl.formatMessage({ id: "firstName" })}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">{intl.formatMessage({ id: "lastName" })}</label>
                        <input
                            id="lastName"
                            type="text"
                            value={lastName}
                            placeholder={intl.formatMessage({ id: "lastName" })}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>
                </div>
                <div className="inputContainer">
                    <div>
                        <label htmlFor="email">{intl.formatMessage({ id: "email" })}</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            placeholder={intl.formatMessage({ id: "Email Address" })}
                            onChange={handleEmailChange}
                        />
                        {emailError && <p className="errorText">{emailError}</p>}
                    </div>
                    <div>
                        <label htmlFor="subject">{intl.formatMessage({ id: "subject" })}</label>
                        <input
                            id="subject"
                            type="text"
                            value={subject}
                            placeholder={intl.formatMessage({ id: "Email Subject" })}
                            onChange={(event) => setSubject(event.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="message">{intl.formatMessage({ id: "message" })}</label>
                    <textarea
                        id="message"
                        value={message}
                        placeholder={intl.formatMessage({ id: "Your Message" })}
                        onChange={(event) => setMessage(event.target.value)}
                    />
                </div>
                <div>
                    <button className={"submitButton"} type="button" onClick={handleSubmit}>
                        {intl.formatMessage({ id: "getInTouch" })}
                    </button>
                </div>
            </form>
        </div>
    );
};