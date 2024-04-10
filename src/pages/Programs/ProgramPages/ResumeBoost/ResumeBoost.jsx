import React from "react";
import ContactUsBox from "../../../../components/ContactUsBox/ContactUsBox";
import "./ResumeBoost.css";

export default function ResumeBoostProgram() {
    return (
        <div className={"resumeBoostContainer"}>
            <div className={"resumeBoostContentContainer"}>
                <div>
                    <h1>
                        ResumeBoost
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