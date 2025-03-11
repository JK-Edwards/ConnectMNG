import StyledLink from "../../components/StyledLink/StyledLink";
import ContactUsBox from "../../components/ContactUsBox/ContactUsBox";
import React from "react";
import {
	MENTORSHIP_PROGRAM_DESC,
	RESUME_BOOST_PROGRAM_DESC,
	CULTURAL_COMPASS_PROGRAM_DESC
} from "../../constants";

import { useIntl } from "react-intl";

import "./Programs.css";

interface ProgramProps{
	name: string;
	description: string;
	pageLink: string;
}

const Program: React.FC<ProgramProps> = ({name, description, pageLink}) => {
	return (
		<div className={"indivProgramContainer"}>
			<div className={"indivProgramTextContainer"}>
				<div className={'programTitleContainer'}>
					<h1>
						{name}
					</h1>
					<StyledLink text={"Get Started"} link={pageLink} />
				</div>
				<p className={'programDescription'}>
					{description}
				</p>
			</div>
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
						At Connect MNG, we’re here to support Mongolian students and young professionals as they take the next step in their careers. Through resume reviews and monthly workshops on essential career skills, we provide practical guidance to help you grow with confidence.
					</p>
				</div>
				<Program name={"Resume Boost"} description={intl.formatMessage({ id: "resumeBoostDesc" })} pageLink={"/programs/resume-boost-program"} />
				<Program name={"Workshop"} description={intl.formatMessage({ id: "workshopDesc" })} pageLink={"/programs/cultural-compass-program"} />
			</div>
			<div className={"contactUsBoxContainer"}>
				<ContactUsBox />
			</div>
		</div>
	);
};