import React, { useState } from "react";
import "./MyWorks.css";
import app1 from "../portfoliyaData/app-1.jpg";
import app2 from "../portfoliyaData/app-2.jpg";
import app3 from "../portfoliyaData/app-3.jpg";
import app4 from "../portfoliyaData/app-4.jpg";
import app5 from "../portfoliyaData/app-5.jpg";
import app6 from "../portfoliyaData/app-6.jpg";
import app7 from "../portfoliyaData/app-7.jpg";
import app8 from "../portfoliyaData/app-8.jpg";
import app9 from "../portfoliyaData/app-9.jpg";
import app10 from "../portfoliyaData/app-10.jpg";
import app11 from "../portfoliyaData/app-11.jpg";
import app12 from "../portfoliyaData/app-12.jpg";
import { TbZoomIn } from "react-icons/tb";
import { FaLink } from "react-icons/fa6";
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

function MyWorks() {
  const myworks = [
    { id: 1, category: "app", title: "App 1", img: app1 },
    { id: 2, category: "product", title: "Product 1", img: app2 },
    { id: 3, category: "branding", title: "Branding 1", img: app3 },
    { id: 4, category: "books", title: "Books 1", img: app4 },
    { id: 5, category: "app", title: "App 2", img: app5 },
    { id: 6, category: "product", title: "Product 2", img: app6 },
    { id: 7, category: "branding", title: "Branding 2", img: app7 },
    { id: 8, category: "books", title: "Books 2", img: app8 },
    { id: 9, category: "app", title: "App 3", img: app9 },
    { id: 10, category: "product", title: "Product 3", img: app10 },
    { id: 11, category: "branding", title: "Branding 3", img: app11 },
    { id: 12, category: "books", title: "Books 3", img: app12 },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredWorks =
    selectedCategory === "all"
      ? myworks
      : myworks.filter((work) => work.category === selectedCategory);

  return (
    <div className="my-works">
      <h1>Portfolio</h1>

      <p></p>

      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>

      <div className="all_btns">
        {["all", "app", "product", "branding", "books"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      <Fade direction="up" cascade triggerOnce duration={2000}>
        <div className="products">
          {filteredWorks.map((value) => (
            <Zoom cascade triggerOnce>
              <div className="cards" key={value.id}>
                <div className="default-bgColor"></div>
                <p>{value.title}</p>
                <img src={value.img} alt={value.title} />
                <div className="icon-container">
                  <span>
                    <TbZoomIn />
                  </span>
                  <span>
                    <FaLink />
                  </span>
                </div>
                <h3>Lorem ipsum, dolor sit amet consectetur</h3>
              </div>
            </Zoom>
          ))}
        </div>
      </Fade>
    </div>
  );
}

export default MyWorks;
