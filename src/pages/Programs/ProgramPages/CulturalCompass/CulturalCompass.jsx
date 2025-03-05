import React from "react";
import ContactUsBox from "../../../../components/ContactUsBox/ContactUsBox";
import "./CulturalCompass.css";
import myImage from "../../../../images/programs/homeIcon.png";

export default function CulturalCompassProgram() {
    return (

        
        <div className={"culturalCompassContainer"}>
            <div className={"culturalCompassContentContainer"}>

            <div className={"homeIconAndResumeBoost"}>
                <a href="http://connectmng.org/" rel={"noreferrer"} >
                    <img src={myImage} className={"icon mobile-only"} alt={"Home"} />
                </a>
				{ <h2 className={'resumeboost-header mobile-only'}> Workshops</h2>}
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