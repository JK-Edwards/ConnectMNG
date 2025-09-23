import React, { useState, useEffect } from "react";
import "./ManageEventsModal.css";

export default function ManageEventsModal({ onClose, event, onSave }) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (event) {
      setId(event.id || "");
      setTitle(event.title || "");
      setDescription(event.description || "");
      setDate(event.date || "");
      setLocation(event.location || "");
      setImageUrl(event.imageUrl || "");
    }
  }, [event]);

  const handleSave = (e) => {
    e.preventDefault();
    onSave({
      id,
      title,
      description,
      date,
      location,
      imageUrl,
    });
    onClose();
  };

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="closeButton" onClick={onClose}>
          &times;
        </button>
        <h2>Manage Events</h2>

        <form onSubmit={handleSave}>
          <div className="modalRow">
            <div className="modalField">
              <label>ID</label>
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="modalField">
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <div className="modalField fullWidth">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="modalField fullWidth">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
   
          <div className="modalField fullWidth">
            <label>Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="modalField fullWidth">
            <label>Image URL</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <div className="modalActions">
            <button type="button" className="cancelBtn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="saveBtn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

