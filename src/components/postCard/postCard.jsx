import React from "react";
import "./postCard.css";

const PostCard = ({ author, title, description }) => {
  return (
    <div className="card-container">
      <h4 className="title">{title}</h4>
      <h5 className="author">{author}</h5>
      <p className="description">
        {description}
      </p>
    </div>
  );
};

export default PostCard;
