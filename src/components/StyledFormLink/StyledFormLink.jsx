import React from 'react';

import { Link } from 'react-router-dom';

import './StyledFormLink.css';

export default function StyledFormLink({ text, link }) {

    return (
        <Link to={link} className={'formLink'} target='_blank' rel='noopener noreferrer'>
            <div >
                {text}
            </div>
        </Link>
    );
};