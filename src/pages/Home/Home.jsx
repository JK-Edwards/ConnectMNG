import ItemCarousel from "../../components/Carousel/ItemCarousel";
import React from "react";

import { useIntl } from "react-intl";

import "./Home.css";

export default function Home() {
	const intl = useIntl();

	const imageSlides = [
		<div className={"carouselSlide"}>
			<img src="https://placekitten.com/400/300" alt="Slide 1" />
			<p>Meow 1</p>
		</div>,
		<div className={"carouselSlide"}>
			<img src="https://placekitten.com/401/300" alt="Slide 2" />
			<p>Meow 2</p>
		</div>,
		<div className={"carouselSlide"}>
			<img src="https://placekitten.com/403/300" alt="Slide 3" />
			<p>Meow 3</p>
		</div>,
		<div className={"carouselSlide"}>
			<img src="https://placekitten.com/404/300" alt="Slide 3" />
			<p>Meow 4</p>
		</div>,
		<div className={"carouselSlide"}>
			<img src="https://placekitten.com/405/300" alt="Slide 3" />
			<p>Meow 5</p>
		</div>,
		<div className={"carouselSlide"}>
			<img src="https://placekitten.com/406/300" alt="Slide 3" />
			<p>Meow 6</p>
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