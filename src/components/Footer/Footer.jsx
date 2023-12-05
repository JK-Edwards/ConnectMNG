import instaLogo from "../../images/insta.avif";
import React from "react";

import "./Footer.css";

export default function Footer() {
    return (
        <div className={"footerContainer"}>
            <a href="https://www.instagram.com/anuujinii" target={"_blank"} rel={"noreferrer"}>
                <img src={instaLogo} className={"icon"} alt={"Instagram"}/>
            </a>
		</div>
    );
};