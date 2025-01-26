import React from "react";
import ContactUsBox from "../../../../components/ContactUsBox/ContactUsBox";
import "./Mentorship.css";

export default function MentorshipProgram() {
    return (
        <div className={"mentorshipContainer"}>
            <div className={"mentorshipContentContainer"}>
                <div>
                    <h1>
                        Mentorship
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