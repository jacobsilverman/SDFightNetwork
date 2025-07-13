import { useState } from "react";
import "./Contact.scss";
import { supabaseHelpers } from "../../lib/supabase";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Add timestamp to the contact data
      const contactData = {
        ...formData,
        created_at: new Date().toISOString(),
      };

      await supabaseHelpers.addContact(contactData);
      
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
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
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              ✅ Thank you! Your message has been sent successfully. We'll get back to you within 24-48 hours.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
            </div>
          )}

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
              disabled={isSubmitting}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none hover-effect disabled:opacity-50 disabled:cursor-not-allowed"
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
              disabled={isSubmitting}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none hover-effect disabled:opacity-50 disabled:cursor-not-allowed"
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
              disabled={isSubmitting}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none hover-effect disabled:opacity-50 disabled:cursor-not-allowed"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 rounded transition ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-black text-white hover:bg-gray-900'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
