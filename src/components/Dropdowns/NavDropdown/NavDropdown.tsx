import React from "react";
import { Link } from "react-router-dom";
import "./NavDropdown.css";

interface NavDropdownProps {
  onSelect: (index: number) => void;
  options: string[];
  links: string[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ onSelect, options, links }) => {
  const handleOptionClick = (index: number) => {
    const navContainer = document.querySelector<HTMLDivElement>('.mobileNavigationContainer');
    if (navContainer) {
      navContainer.style.display = "none"; // Hide the menu
    }
    onSelect(index); // Trigger the provided onSelect callback
  };

  return (
    <div className="subDropdownMenu">
      {options.map((option, index) => (
        <Link 
          key={index}
          to={links[index]}
          className="subDropdownOption"
          onClick={() => handleOptionClick(index)}
        >
          {option}
        </Link>
      ))}
    </div>
  );
};

export default NavDropdown;
