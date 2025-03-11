import React, { useState } from "react";
import "./NewsletterSubscribe.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function NewsletterSubscribe() {
    const [email, setEmail] = useState<string>("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            Swal.fire({
                title: "Invalid Email",
                text: "Please enter a valid email address.",
                icon: "error"
            });
            return;
        }

        const form = {
            to_name: "ConnectMNG",
            from_email: email,
            Email: email
        };

        try {
            await emailjs.send(
                "service_g082yv8",
                "template_bh9ivpm",
                form,
                "O6pJDJsUT4I2tB8Xs"
            );

            localStorage.setItem("subscribedEmail", email);

            Swal.fire({
                title: "Success!",
                text: `You have subscribed with email: ${email}`,
                icon: "success"
            });

            setEmail(""); // Clear input field after successful submission
        } catch (error) {
            Swal.fire({
                title: "Subscription Failed",
                text: "There was an error subscribing. Please try again later.",
                icon: "error"
            });
            console.error("EmailJS Error:", error);
        }
    };

    return (
        <div className="subscriptionContainer">
            <input
                className="emailInput"
                type="email"
                placeholder="Enter your email to receive our newsletters!"
                value={email}
                onChange={handleEmailChange}
            />
            <button onClick={handleSubscribe} className="subscribeButton">
                Subscribe
            </button>
        </div>
    );
}
