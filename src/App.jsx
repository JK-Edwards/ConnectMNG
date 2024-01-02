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
import translations from "./translations.jsx";
import Volunteer from "./pages/Volunteer/Volunteer.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { useState } from "react";

import "./App.css";

export default function App() {
	const [isEnglish, setIsEnglish] = useState(true);

	return (
		<div className={"app"}>
			<IntlProvider locale={isEnglish ? "en" : "mn"} messages={translations[isEnglish ? "en" : "mn"]}>
				<Router>
					<div className={"pinned"}>
						<Header isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
						<Navigation />
					</div>
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
				</Router>
			</IntlProvider>
		</div>
	);
};