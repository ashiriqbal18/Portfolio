import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);
    setStatus("");

    const form = event.target;

    const formData = {
      access_key: "a02a3764-6def-45c0-881c-9aa228c8bc0f",
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      subject: "New Portfolio Contact Message",
      from_name: "Muhammad Ashir Iqbal Portfolio",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Your message has been received. I will get back to you soon.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Unable to send message right now. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let&apos;s Work Together</h3>

          <p>
            I am open to internships, junior developer roles, AI/ML projects,
            full-stack development opportunities, and collaborative software
            projects.
          </p>

          <div className="contact-links">
            <a href="mailto:ashiriqbal939@gmail.com">
              Email: ashiriqbal939@gmail.com
            </a>

            <a
              href="https://github.com/ashiriqbal18"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub: github.com/ashiriqbal18
            </a>

            <a
              href="https://www.linkedin.com/in/ashir-iqbal-b3a489349/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn: linkedin.com/in/ashir-iqbal-b3a489349
            </a>

            <a
              href="https://wa.me/923091279634"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: +92 309 1279634
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />

          <input type="email" name="email" placeholder="Your Email" required />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;