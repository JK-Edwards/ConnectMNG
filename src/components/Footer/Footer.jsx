import NewsletterSubscribe from "../NewsletterSubscribe/NewsletterSubscribe.jsx";
import SocialsBar from "../SocialsBar/SocialsBar.jsx";
import React from "react";
import { useIntl } from "react-intl";

import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
    const intl = useIntl();
    return (
        <div className={"footerContainer"}>
            <div className={"footerPageLinksContainer"}>
                <div className={"footerLinkContainer"}>
                    <h3>EXPLORE</h3>
                    <Link to={"/"}>{intl.formatMessage({ id: "home" }).toUpperCase()}</Link>
                    <Link to={"/resources/blogs"}>{intl.formatMessage({ id: "blogs" }).toUpperCase()}</Link>
                </div>
                <div className={"footerLinkContainer"}>
                    <h3>ENGAGE</h3>
                    <Link to={"/get-involved/donate"}>{intl.formatMessage({ id: "donate" }).toUpperCase()}</Link>
                    <Link to={"/get-involved/internships"}>{intl.formatMessage({ id: "internships" }).toUpperCase()}</Link>
                    <Link to={"/get-involved/volunteer"}>{intl.formatMessage({ id: "volunteer" }).toUpperCase()}</Link>
                </div>
                <div className={"footerLinkContainer"}>
                    <h3>{intl.formatMessage({ id: "about" }).toUpperCase()}</h3>
                    <Link to={"about-us/our-story"}>{intl.formatMessage({ id: "ourStory" }).toUpperCase()}</Link>
                    <Link to={"about-us/our-team"}>{intl.formatMessage({ id: "ourTeam" }).toUpperCase()}</Link>
                </div>
            </div>
            <div className={"footerSocialsLinksContainer"}>
                <div className={"footerSocialsBarContainer"}>
                    <h3>
                        CONNECT WITH US
                    </h3>
                    <SocialsBar isInHeader={false} />
                </div>
                <NewsletterSubscribe />
                <div className={"officialLinksContainer"}>
                    <div>
                        <Link>Terms of Use</Link>
                    </div>
                    <div>
                        <Link>Privacy Policy</Link>
                    </div>
                    <div>©2024 Connect MNG</div>
                </div>
            </div>
        </div>
    );
};