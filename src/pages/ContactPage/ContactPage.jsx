import "./ContactPage.scss";
import { useState } from "react";
import qrCode from "../../assets/Images/qrcode.png";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handleSubject(event) {
    setSubject(event.target.value);
  }
  function handleMessage(event) {
    setMessage(event.target.value);
  }

  function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isFormValid() {
    return name && subject && message && isEmailValid(email);
  }

  function handleSubmit(event) {
    if (!isEmailValid()) {
      alert("Failed to render message");
      return;
    }
  }

  return (
    <section className="contact">
      <section className="contact__container">
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            className="contact__input"
            type="text"
            name="name"
            value={name}
            onChange={handleName}
            placeholder="Your Name"
            required
          />
          <input
            className="contact__input"
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            placeholder="Your Email"
            required
          />
          <input
            className="contact__input"
            type="text"
            name="subject"
            value={subject}
            onChange={handleSubject}
            placeholder="Email Subject"
            required
          />
          <textarea
            className="contact__textarea"
            name="message"
            value={message}
            onChange={handleMessage}
            placeholder="Your Message"
            required
          ></textarea>
          <div className="contact__btn">
            <button type="submit" className="contact__button">
              Message Me
            </button>
          </div>
        </form>
      </section>
      <article className="contact__thankyou">
        <div className="contact__thankyou-text">
          <h3 className="contact__thankyou-heading">Thank You!</h3>
          <p className="contact__thankyou-message">
            I truly appreciate you taking the time to reach out. Whether it's
            about a potential opportunity, collaboration, or just to say hi — it
            means a lot.
          </p>
          <p className="contact__thankyou-message">
            I’ll get back to you as soon as I can. In the meantime, feel free to
            explore more of my work or connect with me on LinkedIn!
          </p>
        </div>
        <figure className="contact__thankyou-figure">
          <img className="contact__thankyou-img" src={qrCode} alt="qrCode" />
        </figure>
      </article>
    </section>
  );
}

export default ContactPage;
