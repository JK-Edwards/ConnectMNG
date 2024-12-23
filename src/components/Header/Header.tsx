import arrow from "../../images/arrow.png";
import LanguageMenu from "../Dropdowns/LanguageMenu/LanguageMenu.tsx";
import SocialsBar from "../SocialsBar/SocialsBar.tsx";
import React, { JSX } from "react";

import { useState } from "react";

import "./Header.css";

interface HeaderProps {
  isEnglish: boolean;
  setIsEnglish: (newStatus: boolean) => void;
}

export default function Header({isEnglish, setIsEnglish}: HeaderProps): JSX.Element {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  function handleLanguageSelect(newStatus: boolean): void {
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
      <SocialsBar isInHeader={true}/>
    </div>
  );
};