import React, { useState } from "react";
import "./Admin.css";
import AdminPanelCard from "../../components/AdminPanelCard/AdminPanelCard";
import ManageBlogs from "./ManageBlogs.jsx";
import ManageEvents from "./ManageEvents.jsx";
import ManageMentors from "./ManageMentors.jsx";

export default function Admin() {
  const [selectedPanel, setSelectedPanel] = useState("blogs");

  return (
    <div className="adminDashboardWrapper">
      <div className="sidebarMenu">
        <AdminPanelCard title="Manage Blogs" onClick={() => setSelectedPanel("blogs")} />
        <AdminPanelCard title="Manage Events" onClick={() => setSelectedPanel("events")} />
        <AdminPanelCard title="Manage Mentors" onClick={() => setSelectedPanel("mentors")} />
      </div>

      <div className="adminContent">
        {selectedPanel === "blogs" && <ManageBlogs />}
        {selectedPanel === "events" && <ManageEvents />}
        {selectedPanel === "mentors" && <ManageMentors />}
      </div>
    </div>
  );
}
