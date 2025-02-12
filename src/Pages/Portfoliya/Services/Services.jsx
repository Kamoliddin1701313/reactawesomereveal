import React from "react";
import "./Services.css";
import {
  BsBriefcase,
  BsCardChecklist,
  BsBarChart,
  BsBinoculars,
  BsBrightnessHigh,
  BsCalendar4Week,
} from "react-icons/bs";

import {
  Slide,
  Zoom,
  Fade,
  Bounce,
  Flip,
  Roll,
  JackInTheBox,
  Hinge,
} from "react-awesome-reveal";

function Services() {
  const services = [
    {
      id: 1,
      icon: <BsBriefcase />,
      title: "Lorem Ipsum",
      text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
    {
      id: 2,
      icon: <BsCardChecklist />,
      title: "Dolor Sitema",
      text: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    },
    {
      id: 3,
      icon: <BsBarChart />,
      title: "Sed ut perspiciatis",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      id: 4,
      icon: <BsBinoculars />,
      title: "Magni Dolores",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: 5,
      icon: <BsBrightnessHigh />,
      title: "Nemo Enim",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    },
    {
      id: 6,
      icon: <BsCalendar4Week />,
      title: "Eiusmod Tempor",
      text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
    },
  ];

  console.log(services);

  return (
    <div className="services">
      <Fade cascade triggerOnce direction="up">
        <h1>Services</h1>
      </Fade>

      <Fade cascade triggerOnce direction="up">
        <p></p>
      </Fade>

      <Fade cascade triggerOnce direction="up">
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </Fade>

      <div className="services-card">
        {services?.map((item, index) => (
          <Fade cascade triggerOnce direction="up">
            <div key={index} className="card">
              <div className="icon">
                <span>{item?.icon}</span>
              </div>

              <div className="contents">
                <h2>{item.title}</h2>
                <h4>{item.text}</h4>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

export default Services;
