import React from "react";
import sidebaruser from "../../Sidebar/sidebar-user.jpg";
import "./HomeUser.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { BsJournalRichtext } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import CountUp from "react-countup";

function HomeUser() {
  const data = [
    { id: 1, name: "Birthday:", title: "1 May 1995" },
    { id: 2, name: "Website:", title: "www.example.com" },
    { id: 3, name: "Phone:", title: "+123 456 7890" },
    { id: 4, name: "City:", title: "New York, USA" },
    { id: 5, name: "Age:", title: "30" },
    { id: 6, name: "Degree:", title: "Master" },
    { id: 7, name: "Email:", title: "email@example.com" },
    { id: 8, name: "Freelance :", title: "Available" },
  ];

  const counterData = [
    {
      id: 1,
      icon: <FaRegSmile />,
      counter: "232",
      title: "Happy Clients",
      text: "consequuntur quae",
    },
    {
      id: 2,
      icon: <BsJournalRichtext />,
      counter: "521",
      title: "Projects",
      text: "adipisci atque cum quia aut",
    },
    {
      id: 3,
      icon: <BsHeadset />,
      counter: "1453",
      title: "Hours Of Support",
      text: "commodi quaerat",
    },
    {
      id: 4,
      icon: <BsPeople />,
      counter: "32",
      title: "Hard Workers",
      text: "rerum asperiores dolor",
    },
  ];

  return (
    <div className="home-user-container">
      <div className="home-user">
        <img src={sidebaruser} alt="sidebaruser" />
        <div className="user-data">
          <h1>UI/UX Designer & Web Developer.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div>
            <div
              style={{
                display: "grid",
                gap: "15px",
                marginTop: "30px",
                gridTemplateColumns: "repeat(2, 1fr)",
              }}
            >
              {data?.map((value, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    width: "100%",
                  }}
                >
                  <span>
                    <MdOutlineNavigateNext
                      style={{ color: "#149ddd", fontSize: "24px" }}
                    />
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      fontFamily: "monospace",
                      fontWeight: "600",
                    }}
                  >
                    {value.name}
                  </span>
                  <span style={{ fontSize: "18px", fontFamily: "monospace" }}>
                    {value.title}
                  </span>
                </div>
              ))}
            </div>

            <p className="home-text">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "grid",
          gap: "15px",
          marginTop: "100px",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {counterData?.map((value, index) => (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "15px",
            }}
          >
            <span
              style={{
                fontSize: "45px",
                fontWeight: "bolder",
                color: "#149ddd",
              }}
            >
              {value.icon}
            </span>
            <div>
              <h1 style={{ fontSize: "42px" }}>
                <CountUp
                  start={0}
                  end={value.counter}
                  duration={5}
                  enableScrollSpy={true}
                  scrollSpyOnce={false}
                >
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </h1>
              <p
                style={{
                  marginTop: "8px",
                  color: "#272829b2",
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                }}
              >
                {value.title}
              </p>
              <p
                style={{
                  marginTop: "8px",
                  color: "#27282973",
                  fontSize: "18px",
                  fontWeight: "lighter",
                  lineHeight: "24px",
                  fontFamily: "sans-serif",
                }}
              >
                {value.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeUser;
