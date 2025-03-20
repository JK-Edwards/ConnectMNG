import React from "react";
import { useIntl } from "react-intl";
import StyledLink from "../../components/StyledLink/StyledLink.jsx";
import teamPhoto from "../../images/blogs/teamPhoto.png";
import "./Workshops.css";

export default function Workshops() {
    return (
        <div className="workshopsContainer">
            <div className="workshopsCardContainer">
                <div className="workshopsCardTextContainer">
                    <h2>Hello and a warm, heartfelt welcome to Connect MNG!</h2>
                    <h3>A Community Rooted in Connection</h3>
                    <p>
                        Connect MNG is a cozy corner where Mongolian American college students and young professionals
                        can unite and support each other's growth through resources, programs, and events.
                    </p>
                </div>
            </div>

            <div className="workshopsCardContainer">
                <div className="workshopsCardTextContainer">
                    <h3>Our Passionate Team</h3>
                    <p>
                        At Connect MNG, our strength lies in our diverse and passionate team of Mongolians in Seattle.
                        Each member brings a unique set of skills, experiences, and a deep commitment to empowering
                        the Mongolian American community. We come from different backgrounds, united by our dedication
                        to supporting our community in America.
                    </p>
                    <img src={teamPhoto} alt="Connect MNG Team" className="team-image" />
                </div>

            </div>

            <div className="workshopsCardContainer">
                <div className="workshopsCardTextContainer">
                    <h3>We are committed.</h3>
                    <p>
                        We have board members, chair members, and interns working hard to build Connect MNG from the
                        ground up—whether by developing our website, planning programs, writing resourceful blogs, or
                        creating a space where Mongolians can connect. Our interns dedicate countless hours on weekdays
                        and weekends, before and after school, coding our website and making it the central hub for
                        resources. For the past two years, our chair members and board members have commuted every Friday
                        after work to meet in person, collaborating on the website, developing programs and projects, and
                        planning community events.
                    </p>
                </div>
            </div>

            <div className="workshopsCardContainer">
                <div className="workshopsCardTextContainer">
                    <h3>Our Shared Mission</h3>
                    <p>
                        We created Connect MNG because each of us once faced these struggles alone—the search for connection
                        and the desire to thrive personally and professionally in a foreign space so full of growth and
                        opportunities.
                    </p>
                    <p>
                        We don't want the next generation of Mongolian college students and young professionals to go through
                        this journey alone. We don't want them to feel the stress and pressure of figuring everything out by
                        themselves. Instead, we want them to feel supported, connected, and empowered to thrive.
                    </p>
                </div>
            </div>

            <div className="workshopsCardContainer">
                <div className="workshopsCardTextContainer">
                    <h3>Navigating Career Development Together</h3>
                    <p>
                        Embarking on your career journey? Feeling a bit lost? Connect MNG is here to guide you.
                    </p>
                    <p>
                        Whether you're a college student applying for internships or a young professional navigating career
                        development, we're here to help. We will help you in building and tailoring your resume to increase
                        your chances in the professional world. We'll help you navigate networking and interviews. But most
                        importantly, we'll help you find a community and friends. You are not alone.
                    </p>
                </div>
            </div>

            <div className="workshopsCardContainer">
                <div className="workshopsCardTextContainer">
                    <h3>In Closing - Let's Thrive Together</h3>
                    <p>
                        Connect MNG isn't just a nonprofit—it's a community of friends, each with a unique story to tell.
                        As Mongolians in America, let's support each other!
                    </p>
                    <p><strong>Join us, and let's connect!</strong></p>
                    <p><strong>Anuujin Ider</strong><br/>President, Connect MNG</p>
                </div>
            </div>
        </div>
    );
}