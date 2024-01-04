import ItemCarousel from "../../components/Carousel/ItemCarousel";
import React from "react";

import { useIntl } from "react-intl";

import "./Home.css";

export default function Home() {
	const intl = useIntl();

	const imageSlides = [
		<div className={"carouselSlide"}>
			<img src="https://placekitten.com/400/300" alt="Slide 1" />
			<p>Slide 1: Lorem ipsum dolor sit amet.</p>
		</div>,
		<div className={"carouselSlide"}>
			<img src="https://placekitten.com/401/300" alt="Slide 2" />
			<p>Slide 2: Consectetur adipiscing elit.</p>
		</div>,
		<div className={"carouselSlide"}>
			<img src="https://placekitten.com/402/300" alt="Slide 3" />
			<p>Slide 3: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		</div>
	  ];

	return (
		<div className={"homeContainer"}>
			<div className={"infoContainer"}>
				<div className={"textContainer"}>
					<h1>
					   {intl.formatMessage({id: "blogs"})}
					</h1>
				</div>
			</div>
			<ItemCarousel slides={imageSlides} interval={2500}/>
		</div>
	);
};