import React from "react";
import "./postCard.css";
import { RiDeleteBin2Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";

const PostCard = ({ id, author, title, description, handleDelete }) => {
  

  return (
    <div className="card-container">
      <h4 className="title">{title}</h4>
      <h5 className="author">{author}</h5>
      <p className="description">{description}</p>
      <div className="card-buttons">
        <button type="submit" className="btn btn-outline-danger" onClick={()=>handleDelete(id)}>
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
