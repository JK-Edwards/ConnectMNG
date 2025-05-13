import React from "react";
import { useIntl } from "react-intl";

import "./ContactUsBox.css";

export default function ContactUsBox() {
    const intl = useIntl();
    return (
        <div className={"contactUsBox"}>
            <div className={"header"}>
                <div>
                    {intl.formatMessage({ id: "contactUs" }).toUpperCase()}
                </div>
            </div>
            <div className={"contactInfo"}>
                <div>
                    {intl.formatMessage({ id: "email" })}
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