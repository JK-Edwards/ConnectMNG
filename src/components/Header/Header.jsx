import arrow from "../../images/arrow.png";
import instaLogo from "../../images/insta.avif";
import React from "react";

import "./Header.css";

const ENG = <div className="engIcon">ENG</div>
const MNG = <div className="mngIcon">MNG</div>

export default function Header({isEnglish, onClick}) {
    function languageButtonOnClick() {
        onClick(!isEnglish);
        console.log("Drop Down Menu Pops Up");
    };

    return (
        <div className={"headerContainer"}>
            <div className={"languageButton"} onClick={() => languageButtonOnClick()}>
                {isEnglish ? ENG : MNG}
                <img src={arrow} className={"arrow"} alt={"Language Menu"}/>
            </div>
            <a href="https://www.instagram.com/anuujinii" target={"_blank"} rel={"noreferrer"}>
                <img src={instaLogo} className={"icon"} alt={"Instagram"}/>
            </a>
		</div>
    );
};