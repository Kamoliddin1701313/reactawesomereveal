import React from "react";
import "./Skills.css";
import { Slide, Fade } from "react-awesome-reveal";

function Skills() {
  const skills = [
    { id: 1, title: "HTML", skills: "100%" },
    { id: 2, title: "PHP", skills: "80%" },
    { id: 3, title: "CSS", skills: "90%" },
    { id: 4, title: "WordPress/CMS", skills: "90%" },
    { id: 5, title: "JavaScript", skills: "75%" },
    { id: 6, title: "Photoshop", skills: "55%" },
  ];

  return (
    <div className="skills">
      <Fade direction="up" cascade triggerOnce duration={2000}>
        <h1>Skills</h1>
      </Fade>
      <Fade>
        <p></p>
      </Fade>

      <Fade>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </Fade>

      <div className="skills-card">
        {skills?.map((value, index) => (
          <div key={index}>
            <div className="skills-framework">
              <p>{value.title}</p>
              <p>{value.skills}</p>
            </div>

            <Fade direction="left" cascade triggerOnce duration={2000}>
              <div className="line-width">
                <p
                  style={{
                    height: "100%",
                    backgroundColor: "#149ddd",
                    width: `${value.skills}`,
                  }}
                ></p>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
