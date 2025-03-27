import logo from "../../images/logo.png";
import React, { useState } from "react";

import { useIntl } from "react-intl";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./NewFeatures.css";

export default function FeatureRequest() {
    const intl = useIntl();

    const [featureTitle, setFeatureTitle] = useState("");
    const [featureDescription, setFeatureDescription] = useState("");

    const handleSubmit = () => {
        if (!featureTitle || !featureDescription) {
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
            feature_title: featureTitle,
            feature_description: featureDescription,
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
                    title: intl.formatMessage({ id: "Feature Submitted" }),
                    text: intl.formatMessage({ id: "Thank you for your idea!" }),
                });
                // Reset form fields
                setFeatureTitle("");
                setFeatureDescription("");
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: intl.formatMessage({ id: "Submission Error" }),
                    text: intl.formatMessage({ id: "Please Try Again" }),
                });
            });
    };

    return (
        <div className={"featureRequestContainer"}>
            <h1>Tell us your Idea</h1>
            <p>
                Have a great feature suggestion? Let us know how it can improve Connect MNG!
            </p>

            <h3>FEATURE TITLE</h3>
            <div className={"inputContainer"}>
                <textarea
                    value={featureTitle}
                    placeholder={"One sentence to describe your feature"}
                    onChange={(event) => setFeatureTitle(event.target.value)}
                />
            </div>

            <h3>DETAILS</h3>
            <div className={"textArea"}>
                <textarea
                    value={featureDescription}
                    placeholder={"Why your idea is useful, who would benefit, and how it would work."}
                    onChange={(event) => setFeatureDescription(event.target.value)}
                />
            </div>

            <div>
                <button className={"submitButton"} type="button" onClick={handleSubmit}>
                    {intl.formatMessage({ id: "Submit Feature" })}
                </button>
            </div>
        </div>
    );
}
