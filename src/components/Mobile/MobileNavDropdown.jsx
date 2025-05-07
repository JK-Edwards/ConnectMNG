import React from "react";

import { Link } from "react-router-dom";

import "./MobileNavDropdown.css";

export default function MobileNavDropdown({ onSelect, options, links }) {
    return (
        <>
            {options.map((option, index) =>
                <Link key={index}
                    to={links[index]}
                    className={"mobileSubDropdown"}
                    onClick={() => onSelect(index)}>
                    {option}
                </Link>)}
        </>
    );
};