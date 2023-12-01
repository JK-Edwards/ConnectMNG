import About from "./pages/about";
import Blogs from "./pages/blogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Donate from "./pages/donate";
import Events from "./pages/events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/index";
import Navbar from "./components/Navbar";
import Programs from "./pages/programs";
import React from "react";
import Resources from "./pages/resources";
import Volunteer from "./pages/volunteer";

function App() {
	return (
		<div>
			<Header/>
			<Router>
				<Navbar />
				<Routes>
					<Route path="*" element={<Home />} />
					<Route path="/programs" element={<Programs />} />
					<Route path="/volunteer" element={<Volunteer />} />
					<Route path="/donate" element={<Donate />} />
					<Route path="/events" element={<Events />} />
					<Route path="/resources" element={<Resources />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
			<Footer/>
		</div>
	);
};

export default App;
