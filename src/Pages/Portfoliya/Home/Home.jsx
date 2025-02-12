import React from "react";
import "./Home.css";
import HomeUser from "./HomeUser/HomeUser";
import Skills from "../Skills/Skills";
import Resume from "../Resume/Resume";
import MyWorks from "../MyWorks/MyWorks";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";

import { Slide, Fade } from "react-awesome-reveal";

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <Fade className="title" direction="up" cascade triggerOnce>
          <div>
            <h1>Alex Smith</h1>
            <div className="text">
              <span>I'm</span>
              <div>Designer</div>
            </div>
          </div>
        </Fade>
      </div>

      <div className="home-about">
        <div>
          <div className="about-title">
            <Fade direction="up" cascade triggerOnce>
              <h1>About</h1>
            </Fade>
          </div>
          <Fade direction="up" cascade triggerOnce>
            <p className="home-text">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </Fade>
        </div>

        <Fade direction="up" cascade triggerOnce>
          <HomeUser />
        </Fade>

        <Fade direction="up" cascade triggerOnce duration={2000}>
          <Skills />
        </Fade>

        <Fade direction="up" cascade triggerOnce duration={2000}>
          <Resume />
        </Fade>

        <Fade direction="up" cascade triggerOnce duration={2000}>
          <MyWorks />
        </Fade>

        <Services />

        <Testimonials />

        <Contact />
      </div>
    </div>
  );
}

export default Home;
