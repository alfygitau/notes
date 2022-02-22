import React from "react";
import "./postCard.css";
import { RiDeleteBin2Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";

const PostCard = ({ id, author, title, description, handleDelete }) => {
  return (
    <div className="card-container">
      <Link to={`/posts/${id}`}>
        <h4 className="title">{title}</h4>
      </Link>

      <h5 className="author">{author}</h5>
      <p className="description">
        {description.length <= 100
          ? description.substring(0, 100)
          : `${description.substring(0, 100)}...`}
      </p>
      <div className="card-buttons">
        <button
          type="submit"
          className="btn btn-outline-danger"
          onClick={() => handleDelete(id)}
        >
          delete | <RiDeleteBin2Line />
        </button>
        <button type="submit" className="btn btn-outline-warning">
          update | <GrUpdate />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
