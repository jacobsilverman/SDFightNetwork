import React from "react";
import "./Privacy.scss";
import { Link } from "react-router-dom";

const Privacy = () => (
  <div className="page-container">
    <h1 className="page-title">Privacy <span>Statement</span></h1>
    <div className="max-w-2xl mx-auto text-left space-y-6">
      <p>
        <strong>SD Fight Network</strong> is committed to protecting your privacy. This Privacy Statement explains how we collect, use, and safeguard your information when you visit our website.
      </p>
      <h2 className="text-xl font-semibold">Information We Collect</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Personal information you provide (such as name, email, etc.) when contacting us or registering for services.</li>
        <li>Non-personal information automatically collected (such as browser type, device, and usage data).</li>
      </ul>
      <h2 className="text-xl font-semibold">How We Use Your Information</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>To provide and improve our services.</li>
        <li>To respond to your inquiries or requests.</li>
        <li>To communicate important updates or information.</li>
      </ul>
      <h2 className="text-xl font-semibold">Information Sharing</h2>
      <p>
        We do not sell, trade, or otherwise transfer your personal information to outside parties except as required by law or to provide requested services. Any information you intentionally provide us for the sake of sharing will be available to all other users.
      </p>
      <h2 className="text-xl font-semibold">Your Consent</h2>
      <p>
        By using our site, you consent to our privacy policy.
      </p>
      <h2 className="text-xl font-semibold">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Statement, please contact us via the information provided on our <Link to="/Contact" className="text-blue-500">Contact page</Link> .
      </p>
    </div>
  </div>
);

export default Privacy; 