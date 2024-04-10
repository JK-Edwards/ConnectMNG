import StyledLink from "../../components/StyledLink/StyledLink";
import ContactUsBox from "../../components/ContactUsBox/ContactUsBox";
import React from "react";

import { useIntl } from "react-intl";


import "./Programs.css";

const desc1 = "The Career Development Program is designed to empower early career professionals, students, and individuals seeking comprehensive "
			+ "support for their career growth. We offer:";


function Program({name, description, pageLink}) {
	return (
		<div className={"indivProgramContainer"}>
			<div className={"indivProgramTextContainer"}>
				<h1>
					{name}
				</h1>
				<p>
					{description}
				</p>
			</div>
			<StyledLink text={"Get Started"} link={pageLink} />
		</div>
	);
}

export default function Programs() {
	const intl = useIntl();

	return (
		<div className={"programsContainer"}>
			<div>
				<div className={"programsHeader"}>
					<h1>
						Our Programs
					</h1>
					<p>
						Description
					</p>
				</div>
				<Program name={"Cultural Compass"} description={desc1} pageLink={"/programs/cultural-compass-program"}/>
				<Program name={"Mentorship"} description={desc1} pageLink={"/programs/mentorship-program"} />
				<Program name={"Resume Boost"} description={desc1} pageLink={"/programs/resume-boost-program"} />
			</div>
			<div className={"contactUsBoxContainer"}>
				<ContactUsBox />
			</div>
		</div>
	);
};