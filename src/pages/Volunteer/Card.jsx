import React from 'react';
import "./Card.css"

const Title = (props) => {
    return (
        <h1>{props.title}</h1>
    );
};
const Description = (props) => {
    return (
        <p>{props.desc}</p>
    );
};

const Content = (props) => {
    return (
        <div className={'volunteerCardContent'}>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    );
};

const Image = (props) => {
    return (
        <div className={'volunteerCardImage'}>
            <img className={'volunteerCardImageStyle'} src={props.link} alt='filler' />
        </div>
    );
};

export const VolunteerCard = (props) => {
    return (
        props.flip ? (
            <div className={'volunteerCard'}>
                <Content title={props.title} desc={props.desc} />
                <Image link={props.link} />
            </div>
        ) : (
            <div className={'volunteerCard'}>
                <Image link={props.link} />
                <Content title={props.title} desc={props.desc} />
            </div>
        )
    );
};

export const VolunteerCardMobile = (props) => {
    return (
        <div className={'volunteerCardContentMobile'}>
            <Title title={props.title} />
            <Image link={props.link} />
            <Description desc={props.desc} />
        </div>
    );
};
