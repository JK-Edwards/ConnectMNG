import About from "./pages";
import Blogs from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages";
import Donate from "./pages";
import Events from "./pages";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages";
import Navbar from "./components/Navbar";
import Programs from "./pages";
import React from "react";
import Resources from "./pages";
import Volunteer from "./pages";

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
