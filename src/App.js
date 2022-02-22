import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PostDetails from "./components/postDetails/postDetails";
import CreatePost from "./pages/createposts/createPost";
import Header from "./pages/header/header";
import Home from "./pages/home/Home";
import Post from "./pages/posts/Post";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/createposts" element={<CreatePost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
