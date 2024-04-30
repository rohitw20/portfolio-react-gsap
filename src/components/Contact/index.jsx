import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section__wrapper contact__container">
        <div className="section__header">
          <div className="primary__title">Contact Me</div>
          <p className="text__muted description">
            Ready to take your digital presence to the next level? Whether
            you're looking to launch a new website, revamp an existing one, or
            need expert advice on the best web technologies, I'm here to help.
            Reach out to discuss your project, ask questions, or just say hello.
          </p>
        </div>

        <div className="contact__group">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__icon" />
              <h3>Email</h3>
              <h5>rohit.w@aikyamedge.com</h5>
              <a
                href="mailto:rohit.w@aikyamedge.com"
                target="_blank"
                className="btn"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__icon" />
              <h3>Messenger</h3>
              <h5>Rohit Waghole</h5>
              <a
                href="http://m.me/profile?id=profile-id"
                target="_blank"
                className="btn"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__icon" />
              <h3>Whatsapp</h3>
              <h5>+918530830135</h5>
              <a
                href="https://api.whatsapp.com/send?phone=918530830135"
                target="_blank"
                className="btn"
              >
                Send a message
              </a>
            </article>
          </div>

          <form>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
            <input type="text" name="email" placeholder="Your Email" required />
            <textarea
              name="message"
              rows={7}
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn btn__primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
