import React from "react";
import "./aboutus.css"; // Add styling for About Us
import myPic from '../assets/cam.jpg'; // Import your picture here

const AboutUs = () => (
  <div className="input-box">
    {/* About Me Section */}
    <div className="about-me">
      <img src={myPic} alt="Lakshmiraj" className="profile-pic" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          My name is Lakshmiraj, a BTech student passionate about building solutions
          that help people manage their daily tasks more efficiently. I developed Smart Split to simplify
          the process of splitting group expenses with friends and family. This project is a part of my learning journey.
        </p>
      </div>
    </div>

    {/* Contact Me Section */}
    <div className="contact-details">
      <h3>Contact Me</h3>
      <p>
        If you'd like to get in touch or have any questions, feel free to reach out to me!
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:lakshmirajvagu@gmail.com" className="contact-link">
          lakshmirajvagu@gmail.com
        </a>
      </p>
      <p>
        <strong>Phone:</strong> +91 7780739108 {/* Replace with your actual phone number */}
      </p>
      <p>
        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/lakshmirajvagu" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
      </p>
      <p>
        <strong>GitHub:</strong> <a href="https://github.com/lakshmirajvagu" className="contact-link" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
      </p>
    </div>
  </div>
);

export default AboutUs;
