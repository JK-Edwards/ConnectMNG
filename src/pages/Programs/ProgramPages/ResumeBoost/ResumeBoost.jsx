import React from "react";
import ContactUsBox from "../../../../components/ContactUsBox/ContactUsBox";
import "./ResumeBoost.css";
import homeIcon from "../../../../images/programs/homeIcon.png";
import resumeIcon from "../../../../images/programs/Connectmng.webp";


export default function ResumeBoostProgram() {


    return (
        <div className={"resumeBoostContainer"}>
            <div className={"resumeBoostContentContainer"}>



                <div className={"homeIconAndResumeBoost"}>
                    <a href="http://connectmng.org/" rel={"noreferrer"} style={{ display: "inline" }}>
                        <img src={homeIcon} className={"icon mobile-only"} alt={"Home"} />
                    </a>
                    {<h2 className={'resumeboost-header mobile-only'}> Resume Boost</h2>}
                </div>


                <div>
                    <div className={"resumeIcon"}>
                        <a>
                            <img src={resumeIcon} className={"icon2 mobile-only"} />
                        </a>
                    </div>
                    <h1>
                        Resume Boost
                    </h1>
                    <p>
                        Elevate Your Career Prospects
                        Resume Boost is a career development program designed to help Mongolian college students and young professionals strengthen their resumes with expert feedback. Participants will have the opportunity to receive personalized resume reviews from industry professionals, ensuring their skills and experiences are effectively highlighted for potential employers.
                    </p>

                    {/* <h2> Why Join?</h2>
                    <ul>
                        <li>✔ Professional Insights - Get feedback from experienced professionals across various industries.</li>
                        <li>✔ Tailored Recommendations - Receive actionable advice to enhance your resume's impact.</li>
                        <li>✔ Career Readiness - Improve your chances of landing internships, jobs, and career opportunities.</li>
                    </ul>

                    <h2> How It Works</h2>
                    <ol>
                        <li> {'\u2705'}  Fill out the Google Form</li>
                        <li> {'\u2705'} Receive expert feedback within 7 days</li>
                        <li> {'\u2705'} Refine your resume and boost your career prospects</li>
                    </ol> */}
                </div>
            </div>
            {/* <div className={"contactUsBoxContainer"}>
                <ContactUsBox />
            </div> */}
        </div>
    )
}