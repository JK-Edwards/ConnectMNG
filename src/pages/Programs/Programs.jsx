import prog1 from "../../images/programs/prog1.png";
import prog2 from "../../images/programs/prog2.png";
import prog3 from "../../images/programs/prog3.png";
import StyledLink from "../../components/StyledLink/StyledLink";
import React from "react";

import { useIntl } from "react-intl";


import "./Programs.css";

const desc1 = "The Career Development Program is designed to empower early career professionals, students, and individuals seeking comprehensive "
			+ "support for their career growth. We offer:";


function Program({name, image, description, pageLink}) {
	return (
		<div className={"indivProgramContainer"}>
			<img className={"programImage"} src={image} alt={name + " Program"}/>
			<h1>
				{name}
			</h1>
			<p>
				{description}
			</p>
			<StyledLink text={"Get Started"} link={pageLink} />
		</div>
	);
}

export default function Programs() {
	const intl = useIntl();

	return (
		<div className={"programsContainer"}>
			<Program name={"Career Development"} image={prog1} description={desc1} pageLink={"/programs/career-development-program"}/>
			<div className={"verticalLine"}/>
			<Program className={"middleProgram"} name={"Mentorship"} image={prog2} description={desc1} pageLink={"/programs/mentorship-program"} />
			<div className={"verticalLine"} />
			<Program name={"Networking"} image={prog3} description={desc1} pageLink={"/programs/networking-program"} />
		</div>
	);
};