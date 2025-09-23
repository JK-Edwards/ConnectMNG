import React, { useState } from "react";
import "./ManageBlogs.css";
import ManageBlogsModal from "../../components/AdminModal/ManageBlogsModal";

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Sample Blog 1", content: "", author: "Anna", thumbnail: "", images: "" },
    { id: 2, title: "Sample Blog 2", content: "", author: "Ben", thumbnail: "", images: "" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleDelete = (id) => setBlogs(blogs.filter((b) => b.id !== id));

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    const newBlog = { id: blogs.length + 1, title: "", content: "", author: "Unknown", thumbnail: "", images: "" };
    setSelectedBlog(newBlog);
    setIsModalOpen(true);
  };

  const handleSave = (updatedBlog) => {
    const exists = blogs.some((b) => b.id === updatedBlog.id);
    if (exists) {
      setBlogs(blogs.map((b) => (b.id === updatedBlog.id ? updatedBlog : b)));
    } else {
      setBlogs([...blogs, updatedBlog]);
    }
  };

  return (
    <div className="manageBlogsWrapper">
      <h2 className="sectionTitle">Manage Blogs</h2>

      <table className="blogsTable">
        <thead>
          <tr>
            <th>SN</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={blog.id}>
              <td>{index + 1}</td>
              <td>{blog.title}</td>
              <td>{blog.author}</td>
              <td>
                <span className="action edit" onClick={() => handleEdit(blog)}>edit</span>
                <span className="action delete" onClick={() => handleDelete(blog.id)}>delete</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="addBtnWrapper">
        <button className="addBlogBtn" onClick={handleAdd}>Add Blog</button>
      </div>

      {isModalOpen && (
        <ManageBlogsModal
          blog={selectedBlog}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
