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
                    <Link>HOME</Link>
                    <Link>BLOG</Link>
                    <Link>PODCAST</Link>
                </div>
                <div className={"footerLinkContainer"}>
                    <h3>GET INVOLVED</h3>
                    <Link>MEMBERSHIP</Link>
                    <Link>VOLUNTEER</Link>
                    <Link>DONATE</Link>
                </div>
                <div className={"footerLinkContainer"}>
                    <h3>ABOUT US</h3>
                    <Link>OUR STORY</Link>
                    <Link>OUR TEAM</Link>
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