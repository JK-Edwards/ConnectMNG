import arrow from '../../images/greenArrow.png';
import React from 'react';

import { Link } from 'react-router-dom';

import './StyledFormLink.css';

interface StyledFormLinkProps{
    text: string;
    link: string;
}

const StyledFormLink: React.FC<StyledFormLinkProps> =({ text, link }) =>{

    return (
        <Link to={link} className={'formLink'} target='_blank' rel='noopener noreferrer'>
            <div >
                {text}
            </div>
        </Link>
    );
};

export default StyledFormLink;