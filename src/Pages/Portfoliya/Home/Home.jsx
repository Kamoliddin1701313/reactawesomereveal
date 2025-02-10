import React from "react";
import "./Home.css";
import herouser from "./hero-user.jpg";
import HomeUser from "./HomeUser/HomeUser";
import Skills from "../Skills/Skills";
import Resume from "../Resume/Resume";
import MyWorks from "../MyWorks/MyWorks";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";

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

        <Skills />

        <Resume />

        <MyWorks />

        <Services />

        <Testimonials />

        <Contact />
      </div>
    </div>
  );
}

export default Home;
