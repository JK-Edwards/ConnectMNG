import resumeBlog1 from "../../../../images/blogs/resumeBlog/resumeBlog1.png";
import resumeBlog2 from "../../../../images/blogs/resumeBlog/resumeBlog2.png";
import resumeBlog3 from "../../../../images/blogs/resumeBlog/resumeBlog3.png";
import React from "react";

import "./ResumeBlog.css";

export default function ResumeBlog() {
    return (
        <div className={"resumeBlogContainer"}>
            <div className="resumeBlogWrapper">
                <h1>
                    Resume 101
                </h1>
                <img src={resumeBlog1} width={"55%"}/>
                <h3>
                    Understanding the Basics
                </h3>
                <p>
                    As the first impression is always important, your resume is the first
                    impression you can make at the companies when applying for a job.
                    According to the Ladders study, on average, recruiters spend 7.4
                    seconds on the initial screening of a resume. Trying to build the
                    resume that works in the U.S' job market can be complicated for
                    international students. In this blog, you will find what is required
                    when building the resume. Let's dive in now.
                </p>
                <p>
                    Simple and easy to read layout is crucial when building the resume.
                    The Ladders study's "gaze tracking" technology showed that
                    recruiters spent almost 80% of their resume review time on
                    following parts which are name, current title/company, previous
                    title/company, previous position start and end dates, current
                    position start and end dates, and education.
                </p>
                <p>
                    Below is an excellent example from Wonsulting's resume and it
                    shows how your resume should look like. Your resume should be
                    simple and easy to follow. You do not need to have fancy fonts,
                    different colors and templates because when you upload your
                    resume their system might not have the font and accept the format
                    that you submitted.
                </p>
                <img src={resumeBlog2} width={"50%"}/>
                <h3>
                    How to tailor your resume to the job you are applying for
                </h3>
                <p>
                    Creating just one excellent resume and using it for countless job
                    applications might not yield the positive results you expect.
                    Consequently, many professionals customize their resumes based
                    on the job description, paying special attention to the skills,
                    experience, and keywords specified. Make sure to change your
                    resume's words to the most mentioned keywords in the job
                    description.
                </p>
                <img src={resumeBlog3} width={"20%"}/>
                <p>
                One of the biggest reasons why you need to tailor your resume is
                over 98.8% of Fortune 500 companies, 66% of large companies and
                35% of small organizations use Applicant Tracking System (ATS)
                software. ATS identifies specific keywords and assesses a
                candidate's skills and strengths. The ATS typically reviews your
                resume before it reaches a recruiter, Therefore, it is important to
                ensure that your resume's language aligns with the job description
                to highlight your skills effectively.
                </p>
            </div>
        </div>
    );
};