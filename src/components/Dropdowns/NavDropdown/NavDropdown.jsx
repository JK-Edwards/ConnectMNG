import React from "react";

import { Link } from "react-router-dom";

import "./NavDropdown.css";

export default function NavDropdown({onSelect, options, links}) {
    return (
        <div className={"resourcesMenu"}>
            {options.map((option, index) =>
                <Link to={links[index]} className={"resourceOption"} onClick={() => onSelect()}>{option}</Link>)}
        </div>
    );
};