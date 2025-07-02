import React, { useState } from "react";
import "./Admin.css";
import AdminPanelCard from "../../components/AdminPanelCard/AdminPanelCard";

export default function Admin() {
  const [selectedPanel, setSelectedPanel] = useState("blogs");

  return (
    <div className="adminDashboardWrapper">
      <div className="sidebarMenu">
        <AdminPanelCard title="Manage Blogs" onClick={() => setSelectedPanel("blogs")} />
        <AdminPanelCard title="Meeting Info" onClick={() => setSelectedPanel("meetings")} />
        <AdminPanelCard title="Manage Mentors" onClick={() => setSelectedPanel("mentors")} />
      </div>

      <div className="adminContent">

        {selectedPanel === "blogs" && (
          <>
            <h2>Manage Blogs</h2>
          </>
        )}

        {selectedPanel === "meetings" && (
          <>
            <h2>Meeting Info</h2>
          </>
        )}

        {selectedPanel === "mentors" && (
          <>
            <h2>Manage Mentors</h2>
          </>
        )}
      </div>
    </div>
  );
}
