import fb from "../../images/fb.png";
import insta from "../../images/insta.png";
import linkedin from "../../images/linkedin.png";
import React from "react";

import "./SocialsBar.css";

export default function SocialsBar() {
    return (
        <div>
            <a href="https://www.instagram.com/connect_mng/" target={"_blank"} rel={"noreferrer"}>
                <img src={insta} className={"icon"} alt={"Instagram"} />
            </a>
            <a href="https://www.linkedin.com/company/connect-mng/" target={"_blank"} rel={"noreferrer"}>
                <img src={linkedin} className={"icon"} alt={"LinkedIn"} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61554736732199" target={"_blank"} rel={"noreferrer"}>
                <img src={fb} className={"icon"} alt={"Facebook"} />
            </a>
        </div>
    );
};