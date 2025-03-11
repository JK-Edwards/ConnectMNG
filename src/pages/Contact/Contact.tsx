import React, { useState } from "react";
import { useIntl } from "react-intl";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./Contact.css";

const Contact: React.FC = () => {
    const intl = useIntl();

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            <div className="inputContainer">
                <input value={firstName} placeholder="First name" onChange={(event) => setFirstName(event.target.value)} />
                <input value={lastName} placeholder="Last name" onChange={(event) => setLastName(event.target.value)} />
            </div>
            <div className="inputContainer">
                <div>
                    <h3>EMAIL</h3>
                    <input value={email} placeholder="Email address" onChange={handleEmailChange} />
                </div>
                <div>
                    <h3>SUBJECT</h3>
                    <input value={subject} placeholder="Email subject" onChange={(event) => setSubject(event.target.value)} />
                </div>
            </div>
            <div>
                <h3>MESSAGE</h3>
                <div className="textArea">
                    <textarea value={message} placeholder="Your message" onChange={(event) => setMessage(event.target.value)} />
                </div>
            </div>
            <div>
                <button className="submitButton" type="button" onClick={handleSubmit}>
                    {intl.formatMessage({ id: "getInTouch" })}
                </button>
            </div>
        </div>
    );
};

export default Contact;
