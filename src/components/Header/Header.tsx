import arrow from "../../images/arrow.png";
import LanguageMenu from "../Dropdowns/LanguageMenu/LanguageMenu";
import SocialsBar from "../SocialsBar/SocialsBar";
import React, { useState } from "react";
import "./Header.css";

interface HeaderProps {
  isEnglish: boolean;
  setIsEnglish: (newStatus: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isEnglish, setIsEnglish }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // Added from merge

  function handleLanguageSelect(newStatus: boolean): void {
    setIsEnglish(newStatus);
    setShowMenu(false);
  }

  return (
    <div className="headerContainer">
      {menuOpen && (
        <nav className="mobileMenu">
          <div>
            <div className="languageContainer">
              <div
                className="languageButton"
                onClick={() => setShowMenu(!showMenu)}
              >
                {isEnglish ? (
                  <div className="engIcon">ENG</div>
                ) : (
                  <div className="mngIcon">MNG</div>
                )}
                <img src={arrow} className="arrow" alt="Language Menu" />
              </div>
              {showMenu && (
                <LanguageMenu isEnglish={isEnglish} onSelect={handleLanguageSelect} />
              )}
            </div>
            <SocialsBar isInHeader={true} />
          </div>
        </nav>
      )}

      {/* Desktop layout */}
      <div className="languageContainer">
        <div
          className="languageButton"
          onClick={() => setShowMenu(!showMenu)}
        >
          {isEnglish ? (
            <div className="engIcon">ENG</div>
          ) : (
            <div className="mngIcon">MNG</div>
          )}
          <img src={arrow} className="arrow" alt="Language Menu" />
        </div>
        {showMenu && (
          <LanguageMenu isEnglish={isEnglish} onSelect={handleLanguageSelect} />
        )}
      </div>
      <SocialsBar isInHeader={true} />
    </div>
  );
};

export default Header;
