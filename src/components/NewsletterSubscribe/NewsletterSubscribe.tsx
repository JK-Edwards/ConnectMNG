import React, { useState, ChangeEvent, MouseEvent } from "react";
import "./NewsletterSubscribe.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useIntl } from "react-intl";

export default function NewsletterSubscribe(): JSX.Element {
    const [email, setEmail] = useState<string>("");
    const intl = useIntl();

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !emailRegex.test(email)) {
            Swal.fire({
                title: "Your email is invalid",
                text: "Please enter a valid email",
                icon: "error"
            });
            return;
        }

        const form = {
            to_name: "ConnectMNG",
            from_email: email,
            Email: email
        };

        emailjs.send('service_g082yv8', 'template_bh9ivpm', form, 'O6pJDJsUT4I2tB8Xs');

        localStorage.setItem("subscribedEmail", email);

        Swal.fire({
            title: "Good job!",
            text: "Subscribed with email: " + email,
            icon: "success"
        });
    };

    return (
        <div className="subscriptionContainer">
            <input
                className="emailInput"
                type="email"
                placeholder={intl.formatMessage({ id: "newsletterPlaceholder" })}
                value={email}
                onChange={handleEmailChange}
            />
            <button onClick={handleSubscribe} className="subscribeButton">
                {intl.formatMessage({ id: "subscribe" })}
            </button>
        </div>
    );
}
