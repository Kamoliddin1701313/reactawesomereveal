import React from "react";
import "./Skills.css";

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
      <h1>Skills</h1>
      <p></p>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <div className="skills-card">
        {skills?.map((value, index) => (
          <div key={index}>
            <div className="skills-framework">
              <p>{value.title}</p>
              <p>{value.skills}</p>
            </div>
            <div className="line-width">
              <p
                style={{
                  height: "100%",
                  backgroundColor: "#149ddd",
                  width: `${value.skills}`,
                }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
