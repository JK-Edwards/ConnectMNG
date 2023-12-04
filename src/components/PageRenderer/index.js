import About from "../../pages/about";
import Blogs from "../../pages/blogs";
import Contact from "../../pages/contact";
import Home from "../../pages/index";
import Programs from "../../pages/programs";
import React from "react";
import Resources from "../../pages/resources";
import Volunteer from "../../pages/volunteer";

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