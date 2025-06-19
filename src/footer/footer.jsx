import React from "react";
import "./Footer.scss";
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__section footer__about">
          <h3 className="footer__title">SD Fight Network</h3>
          <p>
            Bringing you the best martial arts training and sparring network in San Diego. 
          </p>
          <p>© {new Date().getFullYear()} SD Fight Network. All rights reserved.</p>
          <Link to="/Privacy"><p>Privacy Statement</p></Link>
        </div>
        <div className="footer__section footer__links">
          <div>
            <ul className="footer__list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/fighters">Register as Fighter</Link></li>
              <li><Link to="/trainers">Register as Trainer</Link></li>

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
