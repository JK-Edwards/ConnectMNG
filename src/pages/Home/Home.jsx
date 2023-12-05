import BasicCarousel from "../../components/Carousel/BasicCarousel";
import React from "react";

import "./Home.css";

export default function Home() {
	return (
		<div>
			<div className={"infoContainer"}>
				<div className={"textContainer"}>
					<h1>
					   Home
					</h1>
				</div>
			</div>
			<BasicCarousel/>
		</div>
	);
};