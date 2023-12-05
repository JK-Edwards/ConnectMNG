import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import PageRenderer from "./components/PageRenderer/PageRenderer.jsx";
import React, { useState } from "react";

import "./App.css";

function App() {
	const [activeIndex, setActiveIndex] = useState(0);

	const [isEnglish, setIsEnglish] = useState(true);

	return (
		<div className={"app"}>
			<Header isEnglish={isEnglish} onClick={setIsEnglish}/>
			<Navigation activeIndex={activeIndex} onClick={setActiveIndex}/>
			<PageRenderer activeIndex={activeIndex}/>
			<Footer/>
		</div>
	);
};

export default App;
