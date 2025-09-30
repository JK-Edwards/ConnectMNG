import React, { useState } from "react";
import "./ManageBlogs.css";
import ManageMentorsModal from "../../components/AdminModal/ManageMentorsModal";

export default function ManageMentors() {
  const [mentors, setMentors] = useState([
    { id: 1, name: "Anna", specialty: "Software Engineer", bio: "Expert in React", email: "anna@example.com", photoUrl: "" },
    { id: 2, name: "Ben", specialty: "Biochemist", bio: "Researcher", email: "ben@example.com", photoUrl: "" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const handleDelete = (id) => setMentors(mentors.filter((m) => m.id !== id));

  const handleEdit = (mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    const newMentor = { id: mentors.length + 1, name: "", specialty: "", bio: "", email: "", photoUrl: "" };
    setSelectedMentor(newMentor);
    setIsModalOpen(true);
  };

  const handleSave = (updatedMentor) => {
    const exists = mentors.some((m) => m.id === updatedMentor.id);
    if (exists) {
      setMentors(mentors.map((m) => (m.id === updatedMentor.id ? updatedMentor : m)));
    } else {
      setMentors([...mentors, updatedMentor]);
    }
  };

  return (
    <div className="manageBlogsWrapper">
      <h2 className="sectionTitle">Manage Mentors</h2>

      <table className="blogsTable">
        <thead>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mentors.map((mentor, index) => (
            <tr key={mentor.id}>
              <td>{index + 1}</td>
              <td>{mentor.name}</td>
              <td>{mentor.specialty}</td>
              <td>
                <span className="action edit" onClick={() => handleEdit(mentor)}>edit</span>
                <span className="action delete" onClick={() => handleDelete(mentor.id)}>delete</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="addBtnWrapper">
        <button className="addBlogBtn" onClick={handleAdd}>Add Mentor</button>
      </div>

      {isModalOpen && (
        <ManageMentorsModal
          mentor={selectedMentor}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
