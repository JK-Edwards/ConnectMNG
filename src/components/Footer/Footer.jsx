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
                </div>
                <div className={"footerLinkContainer"}>
                    <h3>ENGAGE</h3>
                    <Link to={"/get-involved/donate"}>DONATE</Link>
                    <Link to={"/get-involved/internships"}>INTERNSHIPS</Link>
                    <Link to={"/get-involved/volunteer"}>VOLUNTEER</Link>
                </div>
                <div className={"footerLinkContainer"}>
                    <h3>ABOUT US</h3>
                    <Link to={"about-us/our-story"}>OUR STORY</Link>
                    <Link to={"about-us/our-team"}>OUR TEAM</Link>
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
                    <div>©2024 Connect MNG</div>
                </div>
            </div>
		</div>
    );
};