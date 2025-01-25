import React from "react";
import "./Home.css";
import herouser from "./hero-user.jpg";
import HomeUser from "./HomeUser/HomeUser";

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="title">
          <h1>Alex Smith</h1>
          <div className="text">
            <span>I'm</span>
            <div>sdfsfsdfs</div>
          </div>
        </div>
      </div>

      <div className="home-about">
        <div className="about-title">
          <h1>About</h1>
        </div>
        <p className="home-text">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <HomeUser />
      </div>
    </div>
  );
}

export default Home;
