import blogs from "../../images/blogs.jpeg";
import ItemCarousel from "../../components/Carousel/ItemCarousel";
import React from "react";

import { useIntl } from "react-intl";

import "./Home.css";

export default function Home() {
	const intl = useIntl();

	const blogSlides = [
		<div className={"carouselSlide"}>
			<img src={blogs} height={350} width={350} alt={"Slide 1"} />
			<p>Blog 1</p>
		</div>,
		<div className={"carouselSlide"}>
			<img src={blogs} height={350} width={350} alt={"Slide 2"} />
			<p>Blog 2</p>
		</div>,
		<div className={"carouselSlide"}>
			<img src="https://placekitten.com/403/300" height={350} alt="Slide 3" />
			<p>Meow</p>
		</div>,
		<div className={"carouselSlide"}>
			<img src="https://placekitten.com/404/300" height={350} alt="Slide 3" />
			<p>Meow</p>
		</div>,
		<div className={"carouselSlide"}>
			<img src="https://placekitten.com/405/300" height={350} alt="Slide 3" />
			<p>Meow</p>
		</div>,
		<div className={"carouselSlide"}>
			<img src="https://placekitten.com/406/300" height={350} alt="Slide 3" />
			<p>Meow</p>
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
			<ItemCarousel slides={blogSlides} interval={2500}/>
		</div>
	);
};