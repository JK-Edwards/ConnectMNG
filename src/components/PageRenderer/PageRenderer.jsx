import About from "../../pages/About/About.jsx";
import Blogs from "../../pages/Blogs/Blogs.jsx";
import Contact from "../../pages/Contact/Contact.jsx";
import Home from "../../pages/Home/Home.jsx";
import Programs from "../../pages/Programs/Programs.jsx";
import React from "react";
import Resources from "../../pages/Resources/Resources.jsx";
import Volunteer from "../../pages/Volunteer/Volunteer.jsx";

export default function PageRenderer({activeIndex}) {
    switch (activeIndex) {
        case 0:
            return (<Home/>);

        case 1:
            return (<Programs/>);

        case 2:
            return (<Volunteer/>);

        case 3:
            return (<Blogs/>);

        case 4:
            return (<About/>);

        case 5:
            return (<Resources/>);

        case 6:
            return (<Contact/>);

        default:
            return (<Home/>);
    };
};