import About from "./pages/About/About.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import CareerDevelopment from "./pages/Programs/ProgramPages/CareerDevelopment/CareerDevelopment.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Donate from "./pages/Donate/Donate.jsx";
import Events from "./pages/Events/Events.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Membership from "./pages/Membership/Membership.jsx";
import MentorshipProgram from "./pages/Programs/ProgramPages/Mentorship/Mentorship.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import NetworkingProgram from "./pages/Programs/ProgramPages/Networking/Networking.jsx";
import Podcasts from "./pages/Podcasts/Podcasts.jsx";
import Programs from "./pages/Programs/Programs.jsx";
import React from "react";
import Resources from "./pages/Resources/Resources.jsx";
import ResumeBlog from "./pages/Blogs/IndividualBlogs/ResumeBlog/ResumeBlog.jsx";
import SupportPopup from "./components/SupportPopup/SupportPopup.jsx";
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
					<div className={"pinnedHeader"}>
						<Header isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
						<Navigation />
					</div>
					<Routes>
						<Route path="*" element={<Home />} />
						<Route path="/programs" element={<Programs />} />
						<Route path="/programs/career-development-program" element={<CareerDevelopment />} />
						<Route path="/programs/mentorship-program" element={<MentorshipProgram />} />
						<Route path="/programs/networking-program" element={<NetworkingProgram />} />
						<Route path="/get-involved/volunteer" element={<Volunteer />} />
						<Route path="/get-involved/membership" element={<Membership />} />
						<Route path="/resources/podcasts" element={<Podcasts />} />
						<Route path="/events" element={<Events />} />
						<Route path="/resources/blogs" element={<Blogs />} />
						<Route path="/resources/blogs/resume-blog" element={<ResumeBlog />} />
						<Route path="/about-us" element={<About />} />
						<Route path="/resources" element={<Resources />} />
						<Route path="/contact-us" element={<Contact />} />
						<Route path="/donate" element={<Donate />} />
					</Routes>
					<div className={"pinnedSupportPopup"}>
						<SupportPopup />
					</div>
					<Footer />
				</Router>
			</IntlProvider>
		</div>
	);
};