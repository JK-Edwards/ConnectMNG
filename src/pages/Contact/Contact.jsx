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
    <form className="formContainer" onSubmit={handleSubmit}>
        <h1>{intl.formatMessage({ id: "contactUs" })}</h1>
        <p>{intl.formatMessage({ id: "contactDesc" })}</p>
            {/* First Name Input */}
            <div className="inputContainer">
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            {/* Last Name Input */}
            <div className="inputContainer">
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            {/* Email Input */}
            <div className="inputContainer">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Email Address"
                    onChange={handleEmailChange}
                />
                {emailError && <p className="errorText">{emailError}</p>}
            </div>

            {/* Subject Input */}
            <div className="inputContainer">
                <label htmlFor="subject">Subject</label>
                <input
                    id="subject"
                    type="text"
                    value={subject}
                    placeholder="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                />
            </div>

            {/* Message Text Container (Textarea) */}
            <div className="inputContainer">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    value={message}
                    placeholder="Your Message"
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            {/* Submit Button */}
            <div className="buttonContainer">
            <button className="submitButton" type="button" onClick={handleSubmit}>
            {intl.formatMessage({ id: "getInTouch" })}
            </button>
            </div>
        </form>
    );
};

