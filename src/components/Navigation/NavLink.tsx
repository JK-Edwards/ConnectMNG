import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import React from "react";
import classNames from "classnames";

interface NavLinkProps {
    to: string;
    text: string;
    isActive?: boolean;
    className?: string;
    onClick?: () => void;
    homeButton?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, text, isActive, className, onClick, homeButton }) => {
    if (isActive && className !== classNames("button", "contact")) {
        className = classNames(className, "isActive");
    }

    return (
        <Link to={to} className={className} onClick={onClick}>
            {homeButton && <IoHome />}
            {text}
        </Link>
    );
};

export default NavLink;


	//if this is the home button, render an image tag
	// if (!homeButton) {
	// 	return (
	// 		<IoHome />
			
			
	// 	);
	// }
