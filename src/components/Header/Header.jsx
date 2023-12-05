import instaLogo from "../../images/insta.avif";
import React from "react";

import "./Header.css";

export default function Header() {
    return (
        <div className={"headerContainer"}>
            <div className={"languageIcon"}>
                ENG
            </div>
            <a href="https://www.instagram.com/anuujinii" target={"_blank"} rel={"noreferrer"}>
                <img src={instaLogo} className={"icon"} alt={"Instagram"}/>
            </a>
		</div>
    );
};