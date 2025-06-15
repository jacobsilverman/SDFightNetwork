import { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send data to your backend or 3rd party form service
    console.log("Form submitted:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Contact <span>Us</span></h1>

      <div className="contact-content">
        <div className="contact-info space-y-6">
          <h2 className="text-2xl font-semibold">SD Fight Network</h2>
          <p>
            We’re here to help with training inquiries, business partnerships, and gear support.
            Fill out the form and we’ll get back to you within 24–48 hours.
          </p>

          <div>
            <h3 className="font-semibold">📍 Address</h3>
            <p>Solana Beach, San Diego, CA 92075</p>
          </div>
          
          <span>
            <h3 className="font-semibold">✉️ Email</h3>
            <p>contact@sdfightnetwork.com</p>
          </span>

          <span>
            <h3 className="font-semibold">📞 Phone</h3>
            <p>(760) 815-7801</p>
          </span>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label className="block font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none hover-effect"
            />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none hover-effect"
            />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none hover-effect"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
