import instaLogo from "../../images/insta.avif";
import React from "react";

import { headerStyle,
        mediaIconStyle }
from "./HeaderStyle";

export default function Header() {
    return (
        <div style={headerStyle}>
            <a href="https://www.instagram.com/anuujinii" target={"_blank"} rel={"noreferrer"}>
                <img src={instaLogo} style={mediaIconStyle} alt={"Instagram"}/>
            </a>
		</div>
    );
};