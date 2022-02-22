import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./postDetails.css";

const PostDetails = () => {
  const [product, setProduct] = useState({});
  const param = useParams();
  console.log(param);
  const { id } = param;

  const fetchProduct = async (id) => {
    await axios.get(`http://localhost:8000/posts/${id}`).then((response) => {
      console.log(response);
      setProduct(response.data);
    });
  };

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  return (
    <div className="detail-page">
      <h4 className="title">{product.title}</h4>
      <h5 className="author">{product.author}</h5>
      <p className="description">{product.description}</p>
    </div>
  );
};

export default PostDetails;
