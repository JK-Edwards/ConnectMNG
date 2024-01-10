import NewsletterSubscribe from "../NewsletterSubscribe/NewsletterSubscribe.jsx";
import SocialsBar from "../SocialsBar/SocialsBar.jsx";
import React from "react";

import "./Footer.css";

export default function Footer() {
    return (
        <div className={"footerContainer"}>
            <SocialsBar isInHeader={false}/>
            <NewsletterSubscribe />
		</div>
    );
};