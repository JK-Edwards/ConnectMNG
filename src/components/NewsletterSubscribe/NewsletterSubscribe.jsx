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
        // Change to database when moving to production
        if (email === "" || !emailRegex.test(email)) {
            alert("Please enter a valid email");
            return;
        }

        const handleSubmit = (e) => {
            const form = {
                to_name:"ConnectMNG",
                from_email: email,
                Email: email
            }
            console.log(form);
    
            emailjs.send('service_g082yv8', 'template_bh9ivpm', form, 'O6pJDJsUT4I2tB8Xs')
            .then(res => {
                return res
            })
            .then(data => {
                console.log("data from response", JSON.stringify(data));
                if(data.status <299){
                    e.target.reset();
                }
            })
            .catch(error => {
                console.error("Error:", error);
            })
        }

        handleSubmit(e)


        localStorage.setItem("subscribedEmail", email);
        Swal.fire({
            title: "Good job!",
            text: "Subscribed with email: " + email,
            icon: "success"
          });
        //   alert("Subscribed with email: " + email);


            // emailjs.send('service_ykb70ma', 'template_97jazd7', templateParams)
            //     .then(function(response) {
            //       console.log('SUCCESS!', response.status, response.text);
            //     }, function(error) {
            //     console.log('FAILED...', error);
            //  });
        
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