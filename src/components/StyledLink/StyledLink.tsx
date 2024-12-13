import arrow from "../../images/greenArrow.png";
import React from "react";

import { Link } from "react-router-dom";

import "./StyledLink.css";

interface StyledLinkProps{
    text: string;
    link: string;
}

const StyledLink: React.FC<StyledLinkProps> = ({ text, link }) => {

    return (
        <Link to={link} className={"learnMoreLink"}>
            <p>
                {text}
            </p>
            <img src={arrow} alt={text} />
        </Link>
    );
};

export default StyledLink; 