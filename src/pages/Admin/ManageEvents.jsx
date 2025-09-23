import React, { useState } from "react";
import "./ManageBlogs.css";
import ManageEventsModal from "../../components/AdminModal/ManageEventsModal";

export default function ManageEvents() {
  const [events, setEvents] = useState([
    { id: 1, topic: "Meeting", date: "2025-08-20", time: "10:00 AM", location: "Room A" },
    { id: 2, topic: "Standup", date: "2025-08-25", time: "2:00 PM", location: "Room B" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDelete = (id) => setEvents(events.filter((e) => e.id !== id));

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    const newEvent = { id: events.length + 1, topic: "", date: "", time: "", location: "" };
    setSelectedEvent(newEvent);
    setIsModalOpen(true);
  };

  const handleSave = (updatedEvent) => {
    const exists = events.some((e) => e.id === updatedEvent.id);
    if (exists) {
      setEvents(events.map((e) => (e.id === updatedEvent.id ? updatedEvent : e)));
    } else {
      setEvents([...events, updatedEvent]);
    }
  };

  return (
    <div className="manageBlogsWrapper">
      <h2 className="sectionTitle">Manage Events</h2>

      <table className="blogsTable">
        <thead>
          <tr>
            <th>SN</th>
            <th>Topic</th>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={event.id}>
              <td>{index + 1}</td>
              <td>{event.topic}</td>
              <td>{event.date}</td>
              <td>{event.time}</td>
              <td>{event.location}</td>
              <td>
                <span className="action edit" onClick={() => handleEdit(event)}>edit</span>
                <span className="action delete" onClick={() => handleDelete(event.id)}>delete</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="addBtnWrapper">
        <button className="addBlogBtn" onClick={handleAdd}>Add Event</button>
      </div>

      {isModalOpen && (
        <ManageEventsModal
          event={selectedEvent}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
