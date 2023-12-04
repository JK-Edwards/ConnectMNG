import BasicCarousel from '../components/Carousel';
import logo from "../images/logo.png";
import React from "react";

const baseContainer = {
	"display": "flex",
	"justify-content": "space-around",
	"background": "#C5EBC4"
};

const imgContainer = {
	"display": "flex",
	"justify-content": "space-around"
};

const textContainer = {
	"display": "flex",
	"align-items": "center",
	"font-family": "Palatino"
};

export default function Home() {
	return (
		<div>
			{/* <h1>Brief overview of your organisation's mission and impact.</h1> */}
			<div style={baseContainer}>
				<div style={textContainer}>
					<p>Арабын Нэгдсэн Эмират Улсын Дубай хотноо зохион байгуулагдаж буй Уур амьсгалын өөрчлөлтийн асуудлаарх дэлхийн удирдагчдын дээд түвшний уулзалт гурав дахь өдрөө үргэлжилж  байна. БОАЖ-ын сайд Б.Бат-Эрдэнэ энэ хуралд оролцож байна.
</p>
				</div>
			</div>
			<BasicCarousel/>
			<div>
				<h1>Engaging Visuals and Multimedia Content</h1>
			</div>
			<div>
				<h1>Call to action buttons encouraging visitors to learn more, donate, or get involves.</h1>
			</div>
		</div>
	);
};