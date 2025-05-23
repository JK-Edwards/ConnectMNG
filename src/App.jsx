import OurTeam from "./pages/About/OurTeam/OurTeam.jsx";
import OurStory from "./pages/About/OurStory/OurStory.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import CulturalCompassProgram from "./pages/Programs/ProgramPages/CulturalCompass/CulturalCompass.jsx";
import Donate from "./pages/Donate/Donate.jsx";
import Events from "./pages/Events/Events.jsx";
import ResumeHelp from "./pages/Events/EventsPages/ResumeHelp/Resumehelp.jsx";
import HappyHour from "./pages/Events/EventsPages/HappyHour/HappyHour.jsx"
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Internships from "./pages/Internships/Internships.jsx";
import MentorshipProgram from "./pages/Programs/ProgramPages/Mentorship/Mentorship.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Podcasts from "./pages/Podcasts/Podcasts.jsx";
import Programs from "./pages/Programs/Programs.jsx";
import React from "react";
import Resources from "./pages/Resources/Resources.jsx";
import ResumeBlog from "./pages/Blogs/IndividualBlogs/ResumeBlog/ResumeBlog.jsx";
import ResumeBoostProgram from "./pages/Programs/ProgramPages/ResumeBoost/ResumeBoost.jsx";
import SupportPopup from "./components/SupportPopup/SupportPopup.jsx";
import translations from "./translations.jsx";
import Volunteer from "./pages/Volunteer/Volunteer.jsx";
import NewFeature from "./pages/NewFeatures/NewFeatures.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { useState } from "react";

import "./App.css";
import Workshops from "./pages/Blogs/Workshops.jsx";


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
					<div className={"pageContainer"}>
						<Routes>
							<Route path="/programs" element={<Programs />} />
							<Route path="/programs/cultural-compass-program" element={<CulturalCompassProgram />} />
							<Route path="/programs/mentorship-program" element={<MentorshipProgram />} />
							<Route path="/programs/resume-boost-program" element={<ResumeBoostProgram />} />
							<Route path="/get-involved/volunteer" element={<Volunteer />} />
							<Route path="/get-involved/internships" element={<Internships />} />
							<Route path="/resources/podcasts" element={<Podcasts />} />
							<Route path="/events" element={<Events />} />
							<Route path="/events/resume-help" element={<ResumeHelp />} />
							<Route path="/events/happy-hour" element={<HappyHour />} />
							<Route path="/resources/blogs" element={<Blogs />} />
							<Route path="/resources/blogs/resume-blog" element={<ResumeBlog />} />
							<Route path="/about-us/our-team" element={<OurTeam />} />
							<Route path="/about-us/our-story" element={<OurStory />} />
							<Route path="/resources" element={<Resources />} />
							<Route path="/contact-us" element={<Contact />} />
							<Route path="/get-involved/donate" element={<Donate />} />
							<Route path="/resources/blogs" element={<Blogs />} />
							<Route path="/resources/blogs/welcome-blog" element={<Workshops />} />
							<Route path="*" element={<Home />} />
							<Route path="/new-feature" element={<NewFeature />} />

						</Routes>
					</div>
					<div className={"pinnedSupportPopup"}>
						<SupportPopup />
					</div>
					<Footer />
				</Router>
			</IntlProvider>
		</div>
	);
};