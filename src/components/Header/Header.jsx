import arrow from "../../images/arrow.png";
import instaLogo from "../../images/insta.avif";
import LanguageMenu from "../LanguageMenu/LanguageMenu.jsx";
import React from "react";

import { useState } from "react";

import "./Header.css";

export default function Header({isEnglish, setIsEnglish}) {
  const [showMenu, setShowMenu] = useState(false);

  function handleLanguageSelect(newStatus) {
    setIsEnglish(newStatus);
    setShowMenu(false);
  };

  return (
    <div className={"headerContainer"}>
      <div className="languageContainer">
        <div className={"languageButton"} onClick={() => setShowMenu(!showMenu)}>
          {isEnglish ? <div className="engIcon">ENG</div> : <div className="mngIcon">MNG</div>}
          <img src={arrow} className={"arrow"} alt={"Language Menu"} />
        </div>
        {showMenu ? <LanguageMenu isEnglish={isEnglish} onSelect={handleLanguageSelect} /> : null}
      </div>
      <a href="https://www.instagram.com/anuujinii" target={"_blank"} rel={"noreferrer"}>
        <img src={instaLogo} className={"icon"} alt={"Instagram"} />
      </a>
    </div>
  );
};