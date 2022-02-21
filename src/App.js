import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreatePost from "./pages/createposts/createPost";
import Header from "./pages/header/header";
import Post from "./pages/posts/Post";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/posts" element={<Post />} />
          <Route path="/createposts" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
