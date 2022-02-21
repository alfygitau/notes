import axios from "axios";
import React, { useState } from "react";
import "./createPost.css";
import { AiOutlineLogin } from "react-icons/ai";

const CreatePost = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  console.log(author, title, description);

  const handleSubmit = async (e) => {
      e.preventDefault();
    await axios
      .post("http://localhost:8000/posts", {
        author,
        title,
        description,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className="create-container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            Author is required
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            Title is required
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            description is required
          </div>
        </div>
        <button type="submit" className="btn btn-outline-info">
          submit | <AiOutlineLogin />
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
