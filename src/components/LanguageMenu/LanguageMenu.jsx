import React from "react";

import "./LanguageMenu.css"

export default function LanguageMenu({isEnglish, onSelect}) {
    <div className="dropdown">
      {isEnglish ? <div onClick={() => onSelect(false)}>MNG</div> : <div onClick={() => onSelect(true)}>ENG</div>}
    </div>
  };