import "./ContactPage.scss";
import { useState } from "react";
import qrCode from "../../assets/Images/qrcode.png";
import emailjs from "emailjs-com"; // Ensure emailjs is imported

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    return name && message && isEmailValid(email);
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload
    if (!isEmailValid(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Prepare template params
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY      
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); // Show the thank you message on successful submission

          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.error("Error sending message:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  }

  return (
    <section className="contact">
       <h1 className="contact__title">Contact</h1>
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
