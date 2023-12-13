import fb from "../../images/fb.png";
import insta from "../../images/insta.png";
import linkedin from "../../images/linkedin.png";
import React from "react";

import "./SocialsBar.css";

export default function SocialsBar() {
    return (
        <div>
            <a href="https://www.instagram.com/anuujinii" target={"_blank"} rel={"noreferrer"}>
                <img src={insta} className={"icon"} alt={"Instagram"} />
            </a>
            <a href="https://www.linkedin.com/in/anuujini" target={"_blank"} rel={"noreferrer"}>
                <img src={linkedin} className={"icon"} alt={"LinkedIn"} />
            </a>
            <a href="https://www.facebook.com/anuujini" target={"_blank"} rel={"noreferrer"}>
                <img src={fb} className={"icon"} alt={"Facebook"} />
            </a>
        </div>
    );
};