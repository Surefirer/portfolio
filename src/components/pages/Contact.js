import React from "react";
import { Icons } from "../assets";

function Contact() {
  return (
    <div className="main contactMain">
      <div className="contact-container">
        <div className="avatar">
          <img src={Icons.Avatar} alt="avatar" />
        </div>
        <div className="contact-title">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-card-container">
          <div className="contact-card">
            <h2 className="contact-card__emailIcon">Email</h2>
            <p>liangwz11@hotmail.com</p>
          </div>
          <div className="contact-card">
            <h2 className="contact-card__phoneIcon">Phone</h2>
            <p>778-682-5676</p>
          </div>
          <div className="contact-card">
            <h2 className="contact-card__weixinIcon">WeChat</h2>
            <p>ID: liangwz14</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
