import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="info-container">
        <div className="info">
          <p>
            <strong>Email:</strong> info@ascentisfar.com
          </p>
          <p>
            <strong>Website:</strong> https://ascentisfar.com/
          </p>
          <p>
            <strong>Location:</strong> C/ Isabel Colbrand, 6 – 2º - 28050 Madrid
            – España / Spain
          </p>
        </div>
      </div>
      <div className="form-container">
        <form className="contact-form">
          <div className="Contact">
            <h2>Contact</h2>
          </div>
          <div className="flex-form">
            <div className="form-group">
              <input type="text" id="name" placeholder="Name, company, role" />
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Email" />
            </div>
          </div>
          <div className="form-group">
            <textarea
              id="message"
              rows="6"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
