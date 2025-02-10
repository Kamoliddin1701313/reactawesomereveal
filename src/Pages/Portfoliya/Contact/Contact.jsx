import React from "react";
import "./Contact.css";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone, BsEnvelope } from "react-icons/bs";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p></p>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      <div className="contact-card">
        <div className="location">
          <div className="location-cards">
            <div className="box">
              <IoLocationOutline
                style={{ fontSize: "26px", color: "#149ddd" }}
              />
            </div>

            <div>
              <h3>Address</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>

          <div className="location-cards">
            <div className="box">
              <BsTelephone style={{ fontSize: "26px", color: "#149ddd" }} />
            </div>

            <div>
              <h3>Call Us</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div>

          <div className="location-cards">
            <div className="box">
              <BsEnvelope style={{ fontSize: "26px", color: "#149ddd" }} />
            </div>

            <div>
              <h3>Email Us</h3>
              <p>info@example.com</p>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d183981.98798469652!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown.%20Conference%20Center!5e1!3m2!1sen!2sus!4v1739125631119!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: "none" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="submit">
          <form className="form">
            <div className="form-card">
              <div className="input-card">
                <p>
                  <label htmlFor="name">Your Name</label>
                </p>
                <input required type="text" id="name" />
              </div>

              <div className="input-card">
                <p>
                  <label htmlFor="email">Your Email</label>
                </p>
                <input required type="text" id="email" />
              </div>
            </div>

            <div className="input-card">
              <p>
                <label htmlFor="subject">Subject</label>
              </p>
              <input required type="text" id="subject" />
            </div>

            <div className="input-card">
              <p>
                <label htmlFor="message">Message</label>
              </p>
              <textarea
                required
                style={{ height: "200px" }}
                name="message"
                id="message"
              ></textarea>
            </div>

            <button className="send-message" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "50px",
          lineHeight: "30px",
          letterSpacing: "1px",
        }}
      >
        © Copyright <strong>iPortfolio</strong> All Rights Reserved <br />
        Designed by <span style={{ color: "#449ddd" }}>BootstrapMade</span>
      </p>
    </div>
  );
}

export default Contact;
