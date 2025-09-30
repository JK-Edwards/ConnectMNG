import NewsletterSubscribe from "../NewsletterSubscribe/NewsletterSubscribe.jsx";
import SocialsBar from "../SocialsBar/SocialsBar.jsx";
import React, { useState } from "react";
import { useIntl } from "react-intl";
import LoginModal from "../LoginModal/LoginModal";

import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
    const intl = useIntl();
    const [showLogin, setShowLogin] = useState(false);
    return (
        <div className={"footerContainer"}>
            <div className={"mobile-officialLinksContainer"}>
                <div>
                    <Link>{intl.formatMessage({ id: "termsOfUse" })}</Link>
                </div>
                <div>
                    <Link>{intl.formatMessage({ id: "privacyPolicy" })}</Link>
                </div>
                <div>©2024 Connect MNG</div>
            </div>
            <div className={"footerPageLinksContainer"}>
                <div className={"footerLinkContainer"}>
                    <h3>{intl.formatMessage({ id: "explore" }).toUpperCase()}</h3>
                    <Link to={"/"}>{intl.formatMessage({ id: "home" }).toUpperCase()}</Link>
                    <Link to={"/resources/blogs"}>{intl.formatMessage({ id: "blogs" }).toUpperCase()}</Link>
                </div>
                <div className={"footerLinkContainer"}>
                    <h3>{intl.formatMessage({ id: "engage" }).toUpperCase()}</h3>
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
                        {intl.formatMessage({ id: "connectWithUs" })}
                    </h3>
                    <SocialsBar isInHeader={false} />
                </div>
                <NewsletterSubscribe />
                <div className={"officialLinksContainer"}>
                    {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
                    <div>
                        <span onClick={() => setShowLogin(true)} style={{ cursor: "pointer"}}>
                            {intl.formatMessage({ id: "admin" })} 
                        </span>
                    </div>
                    <div>
                        <Link>{intl.formatMessage({ id: "termsOfUse" })}</Link>
                    </div>
                    <div>
                        <Link>{intl.formatMessage({ id: "privacyPolicy" })}</Link>
                    </div>
                    <div>©2024 Connect MNG</div>
                </div>
            </div>
        </div>
    );
};