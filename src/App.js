import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import PageRenderer from "./components/PageRenderer";
import React, { useState } from "react";

const appStyle = {
    "font-family": "Palatino"
};

function App() {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div style={appStyle}>
			<Header/>
			<Navigation activeIndex={activeIndex} onClick={setActiveIndex}/>
			<PageRenderer activeIndex={activeIndex}/>
			<Footer/>
		</div>
	);
};

export default App;
