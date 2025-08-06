import React from 'react';
import { Link } from 'react-router-dom';

import './StyledFormLink.css';

interface StyledFormLinkProps {
    text: string;
    link: string;
}

export default function StyledFormLink({ text, link }: StyledFormLinkProps): JSX.Element {
    return (
        <Link to={link} className="formLink" target="_blank" rel="noopener noreferrer">
            <div>{text}</div>
        </Link>
    );
}
