import BoardMemberGallery from "../../components/BoardMemberGallery/BoardMemberGallery.jsx";
import React from "react";

import { useIntl } from "react-intl";

import "./About.css";

export default function About() {
	const intl = useIntl();

	return (
		<div className={"aboutContainer"}>
			<BoardMemberGallery/>
		</div>
	);
};