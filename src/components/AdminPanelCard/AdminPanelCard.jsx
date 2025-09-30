import React from "react";
import "./AdminPanelCard.css";

export default function AdminPanelCard({ title, onClick }) {
  return (
    <div className="adminPanelCard" onClick={onClick}>
      <h2>{title}</h2>
    </div>
  );
}

