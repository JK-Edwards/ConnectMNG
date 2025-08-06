import React from "react";

import "./LanguageMenu.css";

interface LanguageMenuProps {
  isEnglish: boolean;
  onSelect: (isEnglish: boolean) => void;
}

const LanguageMenu: React.FC<LanguageMenuProps> = ({ isEnglish, onSelect }) => {
  return (
    <div className="dropdown">
      {isEnglish ? (
        <div onClick={() => onSelect(false)}>MNG</div>
      ) : (
        <div onClick={() => onSelect(true)}>ENG</div>
      )}
    </div>
  );
};

export default LanguageMenu;
