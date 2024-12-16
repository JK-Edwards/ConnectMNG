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


    function handleSubscribe() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Change to database when moving to production
        if (email === "" || !emailRegex) {
            alert("Please enter a valid email");
            return;
        }

        const handleSubmit = (e) => {
            const form = {
                Email: e.target.email.value
            }
            console.log(form);
    
            emailjs.send('service_ykb70ma', 'template_97jazd7', form, 'xAIFrT-0HrsUOzt1d')
            .then(res => {
                return res
            })
            .then(data => {
                console.log("data from response", JSON.stringify(data));
                if(data.status <299){
                    e.target.email.value = "";
                }
            })
            .catch(error => {
                console.log("ERROR \n " + JSON.stringify(error));
            })
        }

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