import arrow from "../../images/greenArrow.png";
import React from "react";

import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

import "./LearnMoreLink.css";

export default function LearnMoreLink({ link }) {
    const intl = useIntl();

    return (
        <Link to={link} className={"learnMoreLink"}>
            <p>
                {intl.formatMessage({ id: "learnMore" })}
            </p>
            <img src={arrow} alt={"Learn More"} />
        </Link>
    );
};