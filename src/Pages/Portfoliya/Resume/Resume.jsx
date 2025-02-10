import React from "react";
import "./Resume.css";
import { data } from "react-router-dom";

function Resume() {
  const resume = [
    {
      id: 1,
      skillsName: "Sumary",
      name: "Brandon Johnson",
      data: "",
      description:
        "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
      title1: "Portland par 127,Orlando, FL",
      title2: "(123) 456-7891",
      title3: "alice.barkley@example.com",
    },

    {
      id: 2,
      skillsName: "Professional Experience",
      name: "Senior graphic design specialist",
      data: "2019 - Present",
      description: "Experion, New York, NY",
      title1:
        "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
      title2:
        "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
      title3:
        "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
      title4:
        "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
    },

    {
      id: 3,
      skillsName: "Education",
      name: "Master of Fine Arts & Graphic Design",
      data: "2015 - 2016",
      description:
        "Rochester Institute of Technology, Rochester, NY  Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
    },

    {
      id: 4,
      skillsName: "",
      name: "Graphic design specialist",
      data: "2017 - 2018",
      description: "Stepping Stone Advertising, New York, NY",
      title1:
        "Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).",
      title2:
        "Managed up to 5 projects or tasks at a given time while under pressure",
      title3:
        "Recommended and consulted with clients on the most appropriate graphic design",
      title4:
        "Created 4+ design presentations and proposals a month for clients and account managers",
    },

    {
      id: 5,
      skillsName: "",
      name: "Bachelor of Fine Arts & Graphic Design",
      data: "2010 - 2014",
      description: "Rochester Institute of Technology, Rochester, NY",
      title1:
        "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila",
    },
  ];

  return (
    <div className="resume">
      <h1>Resume</h1>
      <p></p>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div>
        <div className="wrapper">
          {resume?.map((value, index) => (
            <div key={index}>
              <h2>{value.skillsName}</h2>
              <h3>{value.name}</h3>
              <span>{value.data && value.data}</span>
              <em>{value.description && value.description}</em>
              <ul>{value.title1 && <li>{value.title1}</li>}</ul>

              <ul>{value.title2 && <li>{value.title2}</li>}</ul>

              <ul>{value.title3 && <li>{value.title3}</li>}</ul>

              <ul>{value.title4 && <li>{value.title4}</li>}</ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
