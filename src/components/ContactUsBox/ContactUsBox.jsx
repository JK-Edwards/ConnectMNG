import React from "react";

import "./ContactUsBox.css";

export default function ContactUsBox() {
    return (
        <div className={"contactUsBox"}>
            <div className={"header"}>
                <h1>
                    CONTACT US
                </h1>
            </div>
            <div className={"contactInfo"}>
                <h1>
                    Email
                </h1>
                <p>
                    connectmongol.mng@gmail.com
                </p>
                <h1>
                    Phone
                </h1>
                <p>
                    206.123.4567
                </p>
            </div>
        </div>
    )
};