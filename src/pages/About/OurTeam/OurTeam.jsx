import BoardMemberGallery from "../../../components/BoardMemberGallery/BoardMemberGallery.jsx";
import React from "react";

// import { useIntl } from "react-intl";

import "./OurTeam.css";

export default function OurTeam() {
	// const intl = useIntl();

	return (
		<div className={"aboutContainer"}>
			<BoardMemberGallery/>
		</div>
	);
};