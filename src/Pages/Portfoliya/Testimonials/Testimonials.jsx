import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import user1 from "./user1.jpg";
import user2 from "./user2.jpg";
import user3 from "./user3.jpg";
import user4 from "./user4.jpg";
import user5 from "./user5.jpg";
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

function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      img: user1,
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      name: "John Larson",
      job: "Ceo & Founder",
    },
    {
      id: 2,
      img: user2,
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      name: "Sara Wilsson",
      job: "Designer",
    },
    {
      id: 3,
      img: user3,
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      name: "Jena Karlis",
      job: "Store Owner",
    },
    {
      id: 4,
      img: user4,
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      name: "Matt Brandon",
      job: "Freelancer",
    },
    {
      id: 5,
      img: user5,
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      name: "John Larson",
      job: "Entrepreneur",
    },
  ];

  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <p></p>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      <div className="slider-container">
        <Slider {...settings}>
          {testimonials?.map((value, index) => (
            <div key={index} className="slide">
              <p>{value.text}</p>
              <img src={value.img} alt={value.name} />
              <h2>{value.name}</h2>
              <h3>{value.job}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
