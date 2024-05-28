import React from 'react';

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
            <img className={'volunteerCardImageStyle'}src={props.link} />
        </div>
    );
};

export const VolunteerCard = (props) => {
    return (
        props.flip ? (
            <div className={'volunteerCard'}>
                <Content title={props.title} desc={props.desc}/>
                <Image link={props.link}/>
            </div>
        ) : (
            <div className={'volunteerCard'}>
                <Image link={props.link}/>
                <Content title={props.title} desc={props.desc}/>
            </div>
        )
    );
};