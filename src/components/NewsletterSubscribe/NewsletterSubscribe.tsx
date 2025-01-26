import React, { useState, ChangeEvent, MouseEvent } from "react";
import "./NewsletterSubscribe.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

interface EmailForm extends Record<string, unknown> {
    to_name: string;
    from_email: string;
    Email: string;
  }
  

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e: MouseEvent<HTMLButtonElement>): void => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    const handleSubmit = (): void => {
      const form: EmailForm = {
        to_name: "ConnectMNG",
        from_email: email,
        Email: email,
      };

      emailjs
        .send("service_g082yv8", "template_bh9ivpm", form, "O6pJDJsUT4I2tB8Xs")
        .then(() => {
          Swal.fire({
            title: "Good job!",
            text: `Subscribed with email: ${email}`,
            icon: "success",
          });
          localStorage.setItem("subscribedEmail", email);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    };

    handleSubmit();
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
