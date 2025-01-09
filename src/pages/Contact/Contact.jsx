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
    <div className={"contactContainer"}>
        <h1>{intl.formatMessage({ id: "contactUs" })}</h1>
        <p>{intl.formatMessage({ id: "contactDesc" })}</p>
        <h3>{intl.formatMessage({ id: "yourName" }).toUpperCase()}</h3>
        <div className={"inputContainer"}>
            <input
                value={firstName}
                placeholder={intl.formatMessage({ id: "firstName" })}
                onChange={(event) => setFirstName(event.target.value)}
            />
            <input
                value={lastName}
                placeholder={intl.formatMessage({ id: "lastName" })}
                onChange={(event) => setLastName(event.target.value)}
            />
        </div>
        <div className={"inputContainer"}>
            <div>
                <h3>{intl.formatMessage({ id: "email" }).toUpperCase()}</h3>
                <input
                    value={email}
                    placeholder={intl.formatMessage({ id: "emailAddress" })}
                    onChange={handleEmailChange}
                />
                {emailError && <p className="errorText">{emailError}</p>}
            </div>
            <div>
                <h3>{intl.formatMessage({ id: "subject" }).toUpperCase()}</h3>
                <input
                    value={subject}
                    placeholder={intl.formatMessage({ id: "emailSubject" })}
                    onChange={(event) => setSubject(event.target.value)}
                />
            </div>
        </div>
        <div>
            <h3>{intl.formatMessage({ id: "message" }).toUpperCase()}</h3>
            <div className={"textArea"}>
                <textarea
                    value={message}
                    placeholder={intl.formatMessage({ id: "your message" })}
                    onChange={(event) => setMessage(event.target.value)}
                />
            </div>
        </div>
        <div>
            <button className={"submitButton"} type="button" onClick={handleSubmit}>
                {intl.formatMessage({ id: "getInTouch" }).toUpperCase()}
            </button>
        </div>
    </div>
    );
};