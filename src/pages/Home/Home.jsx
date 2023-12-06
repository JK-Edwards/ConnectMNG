import BasicCarousel from "../../components/Carousel/BasicCarousel";
import React from "react";

import { useIntl } from "react-intl";

import "./Home.css";

export default function Home() {
	const intl = useIntl();

	return (
		<div>
			<div className={"infoContainer"}>
				<div className={"textContainer"}>
					<h1>
					   {intl.formatMessage({id: "home"})}
					</h1>
				</div>
			</div>
			<BasicCarousel/>
		</div>
	);
};