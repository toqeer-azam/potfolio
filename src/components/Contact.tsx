import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
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
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="form-submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
