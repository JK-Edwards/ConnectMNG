import discord from "../../images/socials/discord.png";
import fb from "../../images/socials/fb.png";
import insta from "../../images/socials/insta.png";
import linkedin from "../../images/socials/linkedin.png";
import React from "react";

import "./SocialsBar.css";

export default function SocialsBar() {
    return (
        <div>
            <a href="https://discord.gg/EPMFfUVtXX" target={"_blank"} rel={"noreferrer"}>
                <img src={discord} className={"icon"} alt={"Discord"} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61554736732199" target={"_blank"} rel={"noreferrer"}>
                <img src={fb} className={"icon"} alt={"Facebook"} />
            </a>
            <a href="https://www.instagram.com/connect_mng/" target={"_blank"} rel={"noreferrer"}>
                <img src={insta} className={"icon"} alt={"Instagram"} />
            </a>
            <a href="https://www.linkedin.com/company/connect-mng/" target={"_blank"} rel={"noreferrer"}>
                <img src={linkedin} className={"icon"} alt={"LinkedIn"} />
            </a>
        </div>
    );
};