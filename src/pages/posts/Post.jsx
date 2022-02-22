import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "../../components/postCard/postCard";
import "./Post.css";

const Post = () => {
  const [posts, setPosts] = useState([]);

  const fetchProducts = async () => {
    await axios.get("http://localhost:8000/posts").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/posts/${id}`).then((response) => {
      const postsx = posts.filter((item) => item.id !== id);
      setPosts(postsx);
      console.log(postsx)
    });
  };

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <PostCard
          title={post.title}
          key={post.id}
          author={post.author}
          description={post.description}
          id={post.id}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Post;
