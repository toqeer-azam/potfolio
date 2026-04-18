import { useState } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/toqeerazam.1545@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-info-col">
            <div className="contact-box">
              <h4>Email</h4>
              <p>
                <a href="mailto:toqeerazam.1545@gmail.com" data-cursor="disable">
                  toqeerazam.1545@gmail.com
                </a>
              </p>
              <h4>Phone</h4>
              <p>
                <a href="tel:+923342638022" data-cursor="disable">
                  +92 3342638022
                </a>
              </p>
            </div>
            <div className="contact-box social-box">
              <h4>Social</h4>
              <a
                href="https://github.com/toqeer-azam"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Github <MdArrowOutward />
              </a>
              <a
                href="https://pk.linkedin.com/in/toqeer-azam-b37356404"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Linkedin <MdArrowOutward />
              </a>
              <a
                href="https://x.com/iqrar_khan28?s=21"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Twitter <MdArrowOutward />
              </a>
              <a
                href="https://www.instagram.com/iqrar_57?igsh=czRoaXM5bW5iaGlr&utm_source=qr"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Instagram <MdArrowOutward />
              </a>
            </div>
            <div className="contact-box credits-box">
              <h2>
                Designed and Developed <br /> by <span>Toqeer Azam</span>
              </h2>
              <h5>
                <MdCopyright /> 2024
              </h5>
            </div>
          </div>

          <div className="contact-form-col">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea name="message" placeholder="Tell me about your project..." value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="form-submit-btn" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Error! Try Again" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
