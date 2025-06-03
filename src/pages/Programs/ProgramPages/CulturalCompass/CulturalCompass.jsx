import React from "react";
import ContactUsBox from "../../../../components/ContactUsBox/ContactUsBox";
import "./CulturalCompass.css";
import StyledLink from "../../../../components/StyledLink/StyledLink";


export default function CulturalCompassProgram(link) {
    return (


        <div className={"culturalCompassContainer"}>
            <div className={"culturalCompassContentContainer"}>

                <div className={"homeIconAndResumeBoost"}>
                    <StyledLink text={"Home"} link={"/"} />
                    <h2 className={'resumeboost-header mobile-only'}> Workshops</h2>
                </div>

                <div>
                    <h1>
                        Cultural Compass
                    </h1>
                    <p>
                        Description
                    </p>
                </div>
                <div>
                    <h3>
                        Program Dates
                    </h3>
                    <p>
                        Description
                    </p>
                </div>
                <div>
                    <h3>
                        Program Schedule
                    </h3>
                    <p>
                        Description
                    </p>
                </div>
            </div>
            <div className={"contactUsBoxContainer"}>
                <ContactUsBox />
            </div>
        </div>
    )
}