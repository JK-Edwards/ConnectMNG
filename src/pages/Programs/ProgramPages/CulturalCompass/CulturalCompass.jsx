import React from "react";
import ContactUsBox from "../../../../components/ContactUsBox/ContactUsBox";
import "./CulturalCompass.css";

export default function CulturalCompassProgram() {
    return (
        <div className={"culturalCompassContainer"}>
            <div className={"culturalCompassContentContainer"}>
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