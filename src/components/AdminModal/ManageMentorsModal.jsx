import React, { useState, useEffect } from "react";
import "./ManageMentorsModal.css";

export default function ManageMentorsModal({ onClose, mentor, onSave }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    if (mentor) {
      setId(mentor.id || "");
      setName(mentor.name || "");
      setSpecialty(mentor.specialty || "");
      setBio(mentor.bio || "");
      setEmail(mentor.email || "");
      setPhotoUrl(mentor.photoUrl || "");
    }
  }, [mentor]);

  const handleSave = (e) => {
    e.preventDefault();
    onSave({
      id,
      name,
      specialty,
      bio,
      email,
      photoUrl,
    });
    onClose();
  };

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="closeButton" onClick={onClose}>
          &times;
        </button>
        <h2>Manage Mentors</h2>

        <form onSubmit={handleSave}>
          <div className="modalRow">
            <div className="modalField">
              <label>ID</label>
              <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div className="modalField">
              <label>Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>

          <div className="modalField fullWidth">
            <label>Specialty</label>
            <input type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
          </div>

          <div className="modalField fullWidth">
            <label>Bio</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
          </div>

          <div className="modalField fullWidth">
            <label>Contact Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="modalField fullWidth">
            <label>Photo URL</label>
            <input type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} />
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
