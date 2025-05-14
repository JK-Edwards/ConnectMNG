import React from "react";

import { Link } from "react-router-dom";

import "./NavDropdown.css";

export default function NavDropdown({ onSelect, options, links }) {
  const handleOptionClick = (index) => {
    const navContainer = document.querySelector('.mobileNavigationContainer');
    if (navContainer) {
      navContainer.style.display = "none"; // Hide the menu
    }
    onSelect(index); // Trigger the provided onSelect callback
  };
  return (
    <div className={"subDropdownMenu"}>
      {options.map((option, index) =>
        <Link key={index}
          to={links[index]}
          className={"subDropdownOption"}
          onClick={() => handleOptionClick(index)}>
          {option}
        </Link>)}
    </div>
  );
};