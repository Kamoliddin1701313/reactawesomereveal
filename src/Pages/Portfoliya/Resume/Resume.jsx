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
      title4: "",
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
      description: "Rochester Institute of Technology, Rochester, NY  ",
      title1: "",
      title2: "",
      title3: "",
      title4: "",
    },
    {
      id: 4,
      skillsName: "",
      name: "",
      data: "",
      description: "",
      title1: "",
      title2: "",
      title3: "",
      title4: "",
    },
    {
      id: 5,
      skillsName: "",
      name: "",
      data: "",
      description: "",
      title1: "",
      title2: "",
      title3: "",
      title4: "",
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
    </div>
  );
}

export default Resume;
