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
            to_name: "ConnectMNG",
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
                    title: intl.formatMessage({ id: "Email Sent Success" }),
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
                    title: intl.formatMessage({ id: "Email Sent Error" }),
                    text: intl.formatMessage({ id: "Please Try Again" }),
                });
            });
    };

   
            return (
                <div className="contactContainer">
                    <h1>Contact Us</h1>
                    <p>
                        Have questions about our programs or Connect MNG in general? Please submit the form below and we'll be in touch shortly!
                    </p>
        
                    <h3>YOUR NAME</h3>
                    <div className="contactinputContainer">
                        <input
                            className="contactinput"
                            type="text"
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            className="contactinput"
                            type="text"
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
        
                    <h3>EMAIL &  SUBJECT</h3>
                    <div className="contactinputContainer">
                        <input
                            className="contactinput"
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <input
                            className="contactinput"
                            type="text"
                            placeholder="Email subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    {emailError && <div style={{ color: "red", paddingLeft: "20px" }}>{emailError}</div>}
        
                    <h3>MESSAGE</h3>
                    <div className="contacttextARea">
                    <textarea
                        className="contacttextArea"
                        value={message}
                        placeholder="Your message"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    </div>
                    <div className="contactsubmit">
                    <button className="submitButton" type="button" onClick={handleSubmit}>
                        {intl.formatMessage({ id: "getInTouch", defaultMessage: "Get in Touch!" })}
                    </button>
                    </div>
                </div>
            );
        }