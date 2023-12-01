import instaLogo from "../../images/insta.avif";
import React from "react";

import { footerStyle,
         mediaIconStyle
} from "./FooterStyle";

export default function Footer() {
    return (
        <div style={footerStyle}>
            <a href="https://www.instagram.com/anuujinii" target={"_blank"} rel={"noreferrer"}>
                <img src={instaLogo} style={mediaIconStyle} alt={"Instagram"}/>
            </a>
		</div>
    );
};