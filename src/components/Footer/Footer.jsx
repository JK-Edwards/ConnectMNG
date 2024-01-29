import NewsletterSubscribe from "../NewsletterSubscribe/NewsletterSubscribe.jsx";
import SocialsBar from "../SocialsBar/SocialsBar.jsx";
import React from "react";

import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
    return (
        <div className={"footerContainer"}>
            <div className={"footerPageLinksContainer"}>
                <div className={"footerLinkContainer"}>
                    <h3>EXPLORE</h3>
                    <Link to={"/"}>HOME</Link>
                    <Link to={"/resources/blogs"}>BLOGS</Link>
                    <Link to={"/resources/podcasts"}>PODCASTS</Link>
                </div>
                <div className={"footerLinkContainer"}>
                    <h3>ENGAGE</h3>
                    <Link to={"/get-involved/membership"}>MEMBERSHIP</Link>
                    <Link to={"/get-involved/volunteer"}>VOLUNTEER</Link>
                    <Link to={"/donate"}>DONATE</Link>
                </div>
                <div className={"footerLinkContainer"}>
                    <h3>ABOUT US</h3>
                    <Link to={"about-us"}>OUR STORY</Link>
                    <Link to={"about-us"}>OUR TEAM</Link>
                </div>
            </div>
            <div className={"footerSocialsLinksContainer"}>
                <div className={"footerSocialsBarContainer"}>
                    <h3>
                        CONNECT WITH US
                    </h3>
                    <SocialsBar isInHeader={false}/>
                </div>
                <NewsletterSubscribe />
                <div className={"officialLinksContainer"}>
                    <Link>Terms of Use</Link>
                    <Link>Private Policy</Link>
                    <Link>©2024 Connect MNG</Link>
                </div>
            </div>
		</div>
    );
};