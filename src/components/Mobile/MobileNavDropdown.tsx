import React from "react";
import { Link } from "react-router-dom";

import "./MobileNavDropdown.css";

interface MobileNavDropdownProps {
  onSelect: (index: number) => void;
  options: string[];
  links: string[];
  section: string;
  onClose?: () => void;
}

const MobileNavDropdown: React.FC<MobileNavDropdownProps> = ({
  onSelect,
  options,
  links,
}) => {
  return (
    <>
      {options.map((option, index) => (
        <Link
          key={index}
          to={links[index]}
          className="mobileSubDropdown"
          onClick={() => onSelect(index)}
        >
          {option}
        </Link>
      ))}
    </>
  );
};

export default MobileNavDropdown;
