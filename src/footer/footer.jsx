import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__section footer__about">
          <h3 className="footer__title">SD Fight Network</h3>
          <p>
            Bringing you the best martial arts training and sparring network in San Diego. 
            Dedicated to fighters, trainers, and fans.
          </p>
          <p>© {new Date().getFullYear()} SD Fight Network. All rights reserved.</p>
        </div>

        <div className="footer__section footer__links">
          <ul className="footer__list">
            <li><a href="/fighters">Find Fighters</a></li>
            <li><a href="/fighters">Register as Fighters</a></li>
            <li><a href="/trainers">Find Trainers</a></li>
            <li><a href="/trainers">Register as  Trainers</a></li>
          </ul>
        </div>
        <div className="footer__section footer__links">
          <ul className="footer__list">
            <li><a href="/">Home</a></li>
            <li><a href="/fighters">Register as Fighters</a></li>
            <li><a href="/trainers">Register as  Trainers</a></li>
            <li><a href="/classes">Classes</a></li>
          </ul>
        </div>
        <div className="footer__section footer__links">
          <ul className="footer__list">
            <li><a href="/">Home</a></li>
            <li><a href="/fighters">Find Fighters</a></li>
            <li><a href="/trainers">Find Trainers</a></li>
            <li><a href="/classes">Classes</a></li>
          </ul>
        </div>

        <div className="footer__section footer__contact">
          <h4 className="footer__subtitle">Contact Us</h4>
          <address>
            Solana Beach, San Diego, CA 92075<br />
            Phone: <a href="tel:+17608157801">(760) 815-7801</a><br />
            Email: <a href="mailto:contact@sdfightnetwork.com">contact@sdfightnetwork.com</a>
          </address>
          <div className="footer__socials">
            <a href="https://facebook.com/sdfightnetwork" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
            <a href="https://instagram.com/sdfightnetwork" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
            <a href="https://twitter.com/sdfightnetwork" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
            {/* Replace with SVG icons or font icons if you prefer */}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
