import discord1 from "../../images/socials/discord1.png";
import discord2 from "../../images/socials/discord2.png";
import email1 from "../../images/socials/email1.png";
import email2 from "../../images/socials/email2.png";
import fb1 from "../../images/socials/fb1.png";
import fb2 from "../../images/socials/fb2.png";
import insta1 from "../../images/socials/insta1.png";
import insta2 from "../../images/socials/insta2.png";
import linkedin1 from "../../images/socials/linkedin1.png";
import linkedin2 from "../../images/socials/linkedin2.png";
import React from "react";

import "./SocialsBar.css";

export default function SocialsBar({ isInHeader }) {
    const discordLogo = isInHeader ? discord1 : discord2;
    const emailLogo = isInHeader ? email1 : email2;
    const fbLogo = isInHeader ? fb1 : fb2;
    const instaLogo = isInHeader ? insta1 : insta2;
    const linkedinLogo = isInHeader ? linkedin1 : linkedin2;
    return (
        <div>
            <a href="https://discord.gg/EPMFfUVtXX" target={"_blank"} rel={"noreferrer"}>
                <img src={discordLogo} className={"icon"} alt={"Discord"} />
            </a>
            <a href="mailto:connectmongol.mng@gmail.com" target={"_blank"} rel={"noreferrer"}>
                <img src={emailLogo} className={"icon"} alt={"Email"} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61554736732199" target={"_blank"} rel={"noreferrer"}>
                <img src={fbLogo} className={"icon"} alt={"Facebook"} />
            </a>
            <a href="https://www.instagram.com/connect_mng/" target={"_blank"} rel={"noreferrer"}>
                <img src={instaLogo} className={"icon"} alt={"Instagram"} />
            </a>
            <a href="https://www.linkedin.com/company/connect-mng/" target={"_blank"} rel={"noreferrer"}>
                <img src={linkedinLogo} className={"icon"} alt={"LinkedIn"} />
            </a>
        </div>
    );
};