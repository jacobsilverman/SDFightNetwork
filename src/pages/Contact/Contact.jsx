import { useState } from "react";

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
    <div className="min-h-screen bg-white text-black px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">SD Fight Network</h2>
          <p>
            We’re here to help with training inquiries, business partnerships, and gear support.
            Fill out the form and we’ll get back to you within 24–48 hours.
          </p>

          <div>
            <h3 className="font-semibold">📍 Address</h3>
            <p>Solana Beach, San Diego, CA 92075</p>
          </div>

          <div>
            <h3 className="font-semibold">📞 Phone</h3>
            <p>(760) 815-7801</p>
          </div>

          <div>
            <h3 className="font-semibold">✉️ Email</h3>
            <p>contact@sdfightnetwork.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-xl shadow space-y-4">
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
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
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
