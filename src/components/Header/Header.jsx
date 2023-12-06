// import arrow from "../../images/arrow.png";
// import instaLogo from "../../images/insta.avif";
// import React from "react";

// import "./Header.css";

// const ENG = <div className="engIcon">ENG</div>
// const MNG = <div className="mngIcon">MNG</div>

// export default function Header({isEnglish, onClick}) {
//     function languageButtonOnClick() {
//         onClick(!isEnglish);
//         console.log("Drop Down Menu Pops Up");
//     };

//     return (
//         <div className={"headerContainer"}>
//             <div className={"languageButton"} onClick={() => languageButtonOnClick()}>
//                 {isEnglish ? ENG : MNG}
//                 <img src={arrow} className={"arrow"} alt={"Language Menu"}/>
//             </div>
//             <a href="https://www.instagram.com/anuujinii" target={"_blank"} rel={"noreferrer"}>
//                 <img src={instaLogo} className={"icon"} alt={"Instagram"}/>
//             </a>
// 		</div>
//     );
// };

// Header.js
import React, { useState } from "react";
import arrow from "../../images/arrow.png";
import instaLogo from "../../images/insta.avif";
import LanguageMenu from "../LanguageMenu/LanguageMenu.jsx";

import "./Header.css";

export default function Header({isEnglish, onClick}) {
  const [showDropdown, setShowDropdown] = useState(false);

  function handleLanguageSelect(selectedLanguage) {
    onClick(selectedLanguage);
    setShowDropdown(false);
  }

  const Dropdown = ({ onSelect }) => (
    <div className={"dropdown"}>
      {isEnglish ? <div onClick={() => onSelect(false)}>MNG</div> : <div onClick={() => onSelect(true)}>ENG</div>}
    </div>
  );

  return (
    <div className={"headerContainer"}>
      <div className="languageContainer">
        <div className={"languageButton"} onClick={() => setShowDropdown(!showDropdown)}>
          {isEnglish ? <div className="engIcon">ENG</div> : <div className="mngIcon">MNG</div>}
          <img src={arrow} className={"arrow"} alt={"Language Menu"} />
        </div>
        {showDropdown ? <Dropdown onSelect={handleLanguageSelect} /> : null}
        <LanguageMenu isEnglish={isEnglish} onSelect={handleLanguageSelect} />
      </div>
      <a href="https://www.instagram.com/anuujinii" target={"_blank"} rel={"noreferrer"}>
        <img src={instaLogo} className={"icon"} alt={"Instagram"} />
      </a>
    </div>
  );
};