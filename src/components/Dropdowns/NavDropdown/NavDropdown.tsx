import React from "react";
import { Link } from "react-router-dom";
import "./NavDropdown.css";

interface NavDropdownProps {
  onSelect: (index: number) => void;
  options: string[];
  links: string[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ onSelect, options, links }) => {
  return (
    <div className="resourcesMenu">
      {options.map((option, index) => (
        <Link 
          key={index}
          to={links[index]}
          className="resourceOption"
          onClick={() => onSelect(index)}
        >
          {option}
        </Link>
      ))}
    </div>
  );
};

export default NavDropdown;
