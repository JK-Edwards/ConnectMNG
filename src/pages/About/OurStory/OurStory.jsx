import React from "react";

// import { useIntl } from "react-intl";

import "./OurStory.css";
import { use } from "react";
import { useIntl } from "react-intl";

export default function OurStory() {
	const intl = useIntl();

	return (
		<div className={"ourStoryPage"}>
            <div className={"ourStoryTitle"}>
                {intl.formatMessage({ id: "ourStory" }).toUpperCase()}
            </div>
            <div className={"ourStoryDesc"}>
                {intl.formatMessage({ id: "ourStoryText" })}
            </div>
		</div>
	);
};