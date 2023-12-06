import About from "./pages/About/About.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Programs from "./pages/Programs/Programs.jsx";
import React from "react";
import Resources from "./pages/Resources/Resources.jsx";
import Volunteer from "./pages/Volunteer/Volunteer.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";

function App() {
	const [isEnglish, setIsEnglish] = useState(true);

	return (
		<Router>
			<div className={"app"}>
				<Header isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
				<Navigation />
				<Routes>
					<Route path="*" element={<Home />} />
					<Route path="/programs" element={<Programs />} />
					<Route path="/get-involved" element={<Volunteer />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/about-us" element={<About />} />
					<Route path="/resources" element={<Resources />} />
					<Route path="/contact-us" element={<Contact />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
