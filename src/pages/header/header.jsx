import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import Button from "rsuite/Button";
import { AiOutlineLogin } from "react-icons/ai";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>posts Manager</span>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="/posts" className="link">
              POSTS
            </a>
          </li>
          <li>
            <a href="/editposts" className="link">
              EDIT POSTS
            </a>
          </li>
          <li>
            <a href="/createposts" className="link">
              CREATE POSTS
            </a>
          </li>
          <li>
            <Button appearance="ghost">
              Login | <AiOutlineLogin />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
