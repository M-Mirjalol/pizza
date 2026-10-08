
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("FIERY PIZZA — Contact Message");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:hello@fierypizza.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__container">

          <div className="contact__heading">
            <span className="contact__eyebrow">
              <span className="contact__eyebrow-dot"></span>
              LET'S TALK PIZZA
            </span>

            <h2 className="contact__title">
              GET IN <span>TOUCH.</span>
            </h2>

            <p className="contact__subtitle">
              Got a question, a craving, or just want to say hello?
              We'd love to hear from you.
            </p>
          </div>

          <div className="contact__grid">
            {/* LEFT SIDE */}
            <div className="contact__left">
              <div className="contact__intro">
                <span className="contact__intro-icon">🔥</span>
                <div>
                  <h3>We’re always ready.</h3>
                  <p>Great pizza starts with a great conversation.</p>
                </div>
              </div>

              <div className="contact__info-list">
                <a
                  href="tel:+99894 066 8676"
                  className="contact__info-card"
                >
                  <div className="contact__info-icon">☎</div>
                  <div className="contact__info-content">
                    <span>CALL US</span>
                    <strong>+998 940668676</strong>
                    <small>We’re happy to help</small>
                  </div>
                  <span className="contact__arrow">↗</span>
                </a>

                <a
                  href="mailto:mirqobilovmirjalol.8@gmail.com"
                  className="contact__info-card"
                >
                  <div className="contact__info-icon">✉</div>
                  <div className="contact__info-content">
                    <span>EMAIL US</span>
                    <strong>mirqobilovmirjalol..com</strong>
                    <small>Drop us a message anytime</small>
                  </div>
                  <span className="contact__arrow">↗</span>
                </a>

                <div className="contact__info-card">
                  <div className="contact__info-icon">⌖</div>
                  <div className="contact__info-content">
                    <span>FIND US</span>
                    <strong>Tashkent, Uzbekistan</strong>
                    <small>Come hungry, leave happy</small>
                  </div>
                  <span className="contact__arrow">✦</span>
                </div>

                <div className="contact__info-card">
                  <div className="contact__info-icon">◷</div>
                  <div className="contact__info-content">
                    <span>OPENING HOURS</span>
                    <strong>Every day</strong>
                    <small>Hours to be confirmed</small>
                  </div>
                  <span className="contact__arrow">✦</span>
                </div>
              </div>

              <div className="contact__social">
                <span>FOLLOW THE FLAME</span>
                <div className="contact__social-links">
                  <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
                  <a href="https://t.me/" target="_blank" rel="noreferrer" aria-label="Telegram">tg</a>
                  <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="contact__form-card">
              <div className="contact__form-heading">
                <div>
                  <span className="contact__form-label">SEND A MESSAGE</span>
                  <h3>Say <span>hello.</span></h3>
                </div>
                <div className="contact__form-symbol">✉</div>
              </div>

              <p className="contact__form-description">
                Fill in the details below and let's make something great happen.
              </p>

              <form className="contact__form" onSubmit={handleSubmit}>
                <label htmlFor="contact-name">YOUR NAME</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  required
                />

                <label htmlFor="contact-email">EMAIL ADDRESS</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  required
                />

                <label htmlFor="contact-message">YOUR MESSAGE</label>
                <textarea
                  id="contact-message"
                  placeholder="Tell us what's on your mind..."
                  rows="5"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                />

                <button type="submit" className="contact__submit">
                  SEND MESSAGE
                  <span>↗</span>
                </button>

                <p className="contact__form-note">
                  🔒 Your message will open in your email application.
                </p>
              </form>
            </div>
          </div>

          <div className="contact__bottom">
            <span>MADE WITH 🔥 AND A LOT OF CHEESE.</span>
            <a href="#home">BACK TO TOP ↑</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;