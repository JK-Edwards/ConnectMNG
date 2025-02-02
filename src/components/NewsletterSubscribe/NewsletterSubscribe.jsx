import React from "react";
import { useState } from "react";
import "./NewsletterSubscribe.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
export default function NewsletterSubscribe() {
    const [email, setEmail] = useState("");
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSubscribe = (e) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !emailRegex.test(email)) {
                Swal.fire({
                    title: "Your email is invalid",
                    text: "Please enter a valid email",
                    icon: "error"
                });
            return;
        }
        const handleSubmit = (e) => {
            const form = {
                to_name:"ConnectMNG",
                from_email: email,
                Email: email
            }
            emailjs.send('service_g082yv8', 'template_bh9ivpm', form, 'O6pJDJsUT4I2tB8Xs')
        }
        handleSubmit(e)
        localStorage.setItem("subscribedEmail", email);
        Swal.fire({
            title: "Good job!",
            text: "Subscribed with email: " + email,
            icon: "success"
          });
    }

    
    
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