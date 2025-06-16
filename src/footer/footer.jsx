import React from "react";
import "./Footer.scss";
import { SocialIcon } from 'react-social-icons';

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
          <div>
            <ul className="footer__list">
              <li><a href="/">Home</a></li>
              <li><a href="/fighters">Register as Fighter</a></li>
              <li><a href="/trainers">Register as Trainer</a></li>

            </ul>
          </div>
          <div>
            <ul className="footer__list">
              <li><a href="/locations">Classes</a></li>
              <li><a href="/fighters">Find Opponents</a></li>
              <li><a href="/trainers">Find Trainers</a></li>
            </ul>
          </div>
          <div>
            <ul className="footer__list">
              <li><a href="/equipment">Equipment</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        

        <div className="footer__section footer__contact">
          <h4 className="footer__subtitle">Contact Us</h4>
          <address>
            Solana Beach, San Diego, CA 92075<br />
            Phone: <a href="tel:+17608157801">(760) 815-7801</a><br />
            Email: <a href="mailto:contact@sdfightnetwork.com">contact@sdfightnetwork.com</a>
          </address>
          <div className="footer__socials">
            <SocialIcon url="https://twitter.com/sdfightnetwork" />
            <SocialIcon url="https://facebook.com/sdfightnetwork" />
            <SocialIcon url="https://instagram.com/sdfightnetwork" />
            <SocialIcon url="https://youtube.com/sdfightnetwork" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
