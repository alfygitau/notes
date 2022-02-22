import React from "react";
import "./Home.css";
import landing from "../../assets/home.webp";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-image">
        <img src={landing} alt="landing" />
      </div>
      <div className="home-content">
        <h4 className="intro">
          Submit your top articles for maximum exposure and drive traffic to
          your website.
        </h4>
        <span>59,200 top authors.</span>
        <span>177,966 created articles.</span>
        <span>117 categories.</span>
        <span>
          <button type="button" class="btn btn-info">
            Get Started
          </button>
        </span>
      </div>
    </div>
  );
};

export default Home;
