import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPaperPlane,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircle,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/danilobuban09@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `New Portfolio Message from ${formData.name}`,
            message: formData.message,
            _subject: `[Portfolio] ${formData.subject || `New Message from ${formData.name}`}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success !== "false") {
        setStatus("success");
        setStatusMessage(
          "Thank you! Your message has been sent directly to my Gmail inbox (danilobuban09@gmail.com). I will get back to you shortly!"
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to send message.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setStatusMessage(
        "Oops! Something went wrong while sending your message. Please try again or reach out directly at danilobuban09@gmail.com."
      );
    }
  };

  return (
    <div className="contact-page-wrapper">
      {/* Section Header */}
      <section className="neu-section-header">
        <span className="neu-eyebrow-pill">04 — CONTACT</span>
        <h1 className="section-main-title">
          Let's Work <span className="text-gradient">Together.</span>
        </h1>
        <p className="section-description">
          Have a project idea, opportunity, or collaboration in mind? Feel free
          to reach out. I'd love to hear from you.
        </p>
      </section>

      {/* Main Contact Grid */}
      <section className="neu-contact-section">
        <div className="contact-layout-grid">
          {/* Left: Contact Info Card */}
          <div className="contact-info-column">
            <div className="neu-contact-info-card">
              <h2 className="info-card-heading">Contact Information</h2>
              <p className="info-card-subtext">
                I am actively seeking software development and web engineering
                opportunities. Feel free to connect directly through any of the
                channels below.
              </p>

              <div className="contact-details-list">
                {/* Email Item */}
                <div className="contact-detail-row">
                  <div className="detail-icon-circle">
                    <FaEnvelope />
                  </div>
                  <div className="detail-text">
                    <small>Email</small>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=danilobuban09@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="detail-link"
                    >
                      danilobuban09@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="contact-detail-row">
                  <div className="detail-icon-circle">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="detail-text">
                    <small>Location</small>
                    <p className="detail-val">
                      Bacoor City, Cavite, Philippines
                    </p>
                  </div>
                </div>

                {/* Availability Item */}
                <div className="contact-detail-row">
                  <div className="detail-icon-circle">
                    <FaClock />
                  </div>
                  <div className="detail-text">
                    <small>Availability</small>
                    <p className="detail-val">
                      Full-time • Hybrid • Remote
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Circular Neumorphic Buttons */}
              <div className="contact-socials-group">
                <span className="socials-group-label">Social Media</span>
                <div className="social-circle-buttons-row">
                  <a
                    href="https://github.com/phantom072802"
                    target="_blank"
                    rel="noreferrer"
                    className="neu-circle-btn"
                    aria-label="GitHub"
                    title="GitHub Profile"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="neu-circle-btn"
                    aria-label="LinkedIn"
                    title="LinkedIn Profile"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="https://www.facebook.com/danilo.de.jesus.193543"
                    target="_blank"
                    rel="noreferrer"
                    className="neu-circle-btn"
                    aria-label="Facebook"
                    title="Facebook Profile"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="neu-circle-btn"
                    aria-label="YouTube"
                    title="YouTube Channel"
                  >
                    <FaYoutube />
                  </a>

                  <a
                    href="https://www.instagram.com/__unvanquished/"
                    target="_blank"
                    rel="noreferrer"
                    className="neu-circle-btn"
                    aria-label="Instagram"
                    title="Instagram Profile"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Neumorphic Contact Form */}
          <div className="contact-form-column">
            <form className="neu-contact-form-card" onSubmit={handleSubmit}>
              <div className="form-card-header">
                <h2>Send Me a Message</h2>
                <p>Fill out the form below and it will be sent directly to my Gmail.</p>
              </div>

              {/* Full Name Field */}
              <div className="neu-form-group">
                <label htmlFor="name">Full Name *</label>
                <div className="neu-input-wrapper">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="ex. Juan Dela Cruz"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === "submitting"}
                    className="neu-input"
                  />
                </div>
              </div>

              {/* Email Address Field */}
              <div className="neu-form-group">
                <label htmlFor="email">Email Address *</label>
                <div className="neu-input-wrapper">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ex. juan@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === "submitting"}
                    className="neu-input"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="neu-form-group">
                <label htmlFor="subject">Subject *</label>
                <div className="neu-input-wrapper">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="ex. Project Opportunity / Software Developer Role"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={status === "submitting"}
                    className="neu-input"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="neu-form-group">
                <label htmlFor="message">Message *</label>
                <div className="neu-input-wrapper">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write your message or project requirements here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === "submitting"}
                    className="neu-input textarea"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="neu-btn neu-btn-primary submit-btn full-width"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <>
                    <FaSpinner className="spinner-icon" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="btn-icon" />
                  </>
                )}
              </button>

              {/* Status Feedbacks */}
              {status === "success" && (
                <div className="neu-form-status success">
                  <FaCheckCircle className="status-icon" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div className="neu-form-status error">
                  <FaExclamationCircle className="status-icon" />
                  <span>{statusMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;