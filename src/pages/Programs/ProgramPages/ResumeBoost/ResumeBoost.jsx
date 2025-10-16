import React from "react";
import "./ResumeBoost.css";
import resumeIcon from "../../../../images/programs/Connectmng.webp";

export default function ResumeBoostProgram() {
  return (
    <div className="resumeBoostContainer">
      <div>
        {/* ✅ Single unified header (same style as Programs header) */}
        <div className="resumeBoostHeader">
          <h1>Resume Boost</h1>
          <p>
            Elevate your career prospects with personalized resume reviews from
            industry professionals. Improve clarity, impact, and alignment to
            your target roles.
          </p>
        </div>

        {/* Body section (mirrors Programs layout) */}
        <div className="indivProgramContainer">
          <div className="indivProgramTextContainer">
            <p className="programDescription">
              Resume Boost is a career development program designed to help
              Mongolian college students and young professionals strengthen
              their resumes with expert feedback. Participants receive tailored
              guidance to ensure their skills and experiences are effectively
              highlighted for potential employers.
            </p>

            <div className="resumeIconBlock mobile-desktop">
              <img
                src={resumeIcon}
                className="programImage"
                alt="Resume Boost Program"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
