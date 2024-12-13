import React from "react";

import { useState } from "react";

import "./NewsletterSubscribe.css";

export default function NewsletterSubscribe() {
    const [email, setEmail] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = () => {
        // Change to database when moving to production
        if (email === "") {
            alert("Please enter a valid email");
            return;
        }
        localStorage.setItem("subscribedEmail", email);
        alert("Subscribed with email: " + email);
    };

    return (
        <div className="subscriptionContainer">
            <input
                className={"emailInput"}
                type="email"
                placeholder="Enter your email to receive our newsletters!"
                value={email}
                onChange={handleEmailChange}
            />
            <button onClick={handleSubscribe} className={"subscribeButton"}>Subscribe</button>
        </div>
    );
}