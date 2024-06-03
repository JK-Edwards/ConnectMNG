import React from "react";

import "./ContactUsBox.css";

export default function ContactUsBox() {
    return (
        <div className={"contactUsBox"}>
            <div className={"header"}>
                <div>
                    CONTACT US
                </div>
            </div>
            <div className={"contactInfo"}>
                <div>
                    Email
                </div>
                <p>
                    connectmongol.mng@gmail.com
                </p>
                <div>
                    Phone
                </div>
                <p>
                    206.123.4567
                </p>
            </div>
        </div>
    )
};