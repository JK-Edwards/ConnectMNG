import React, { useState, useEffect } from "react";
import "./ManageBlogsModal.css";

export default function ManageBlogsModal({ onClose, blog, onSave }) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState("");

  useEffect(() => {
    if (blog) {
      setId(blog.id || "");
      setTitle(blog.title || "");
      setContent(blog.content || "");
      setThumbnail(blog.thumbnail || "");
      setImages(blog.images || "");
    }
  }, [blog]);

  const handleSave = (e) => {
    e.preventDefault();
    onSave({
      id,
      title,
      content,
      thumbnail,
      images,
      author: blog?.author || "Unknown",
    });
    onClose();
  };

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="closeButton" onClick={onClose}>&times;</button>
        <h2>Manage Blogs</h2>
        <form onSubmit={handleSave}>
          <div className="modalRow">
            <div className="modalField">
              <label>ID</label>
              <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div className="modalField">
              <label>Title</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
          </div>

          <div className="modalRow">
            <div className="modalField fullWidth">
              <label>Content</label>
              <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
          </div>

          <div className="modalRow">
            <div className="modalField">
              <label>Images</label>
              <input type="text" value={images} onChange={(e) => setImages(e.target.value)} />
            </div>
            <div className="modalField">
              <label>Thumbnail</label>
              <input type="text" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
            </div>
          </div>

          <div className="modalActions">
            <button type="button" className="cancelBtn" onClick={onClose}>Cancel</button>
            <button type="submit" className="saveBtn">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
