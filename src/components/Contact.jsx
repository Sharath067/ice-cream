import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <footer className="contact-section">
      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-left">
          <h2 className="contact-title">
            Contact Us
            <span></span>
          </h2>

          <form className="contact-form">
            <input type="text" placeholder="NAME" />
            <input type="email" placeholder="EMAIL" />
            <input type="text" placeholder="PHONE NUMBAR" />
            <textarea placeholder="MASSAGE"></textarea>

            <button type="submit">SEND</button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <div className="contact-info">
            <p>
              <FaMapMarkerAlt />
              Making this the first true
            </p>
            <p>
              <FaPhoneAlt />
              Call : +01 1234567890
            </p>
            <p>
              <FaEnvelope />
              Email : demo@gmail.com
            </p>
          </div>

          <div className="newsletter">
            <h4>Newsletter</h4>
            <div className="newsletter-box">
              <input type="email" placeholder="ENTER YOUR EMAIL" />
              <button>SUBSCRIBE</button>
            </div>
          </div>

          <div className="social-icons">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
            <span>
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span></span>
        <p>
          2026 All Rights Reserved. Design by Asar it Solutions. Developed by
          Sharath. Made with ❤️ in India.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
