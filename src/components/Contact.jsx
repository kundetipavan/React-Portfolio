import React from "react";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container">
        <div className="contact__info">
          <div className="contact__card">
            <i class="fa-solid fa-envelope"></i>
            <div>
            <h3 className="contact__card-title">Email</h3>
            <span className="contact__card-data">pavankundeti2004@gmail.com</span>
            </div>
          </div>

          <div className="contact__card">
            <i class="fa-brands fa-github"></i>
            <div>
            <h3 className="contact__card-title">Github</h3>
            <a
              href="https://github.com/kundetipavan"
              className="contact__card-data"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/kundetipavan
            </a>
            </div>
          </div>
        </div>

        <form className="contact__form">
          <div className="contact__form-group">
            <input type="text" placeholder="Name" className="contact__input" />
            <input type="email" placeholder="Email" className="contact__input" />
          </div>
          <input type="text" placeholder="Project" className="contact__input" />
          <textarea
            placeholder="Message"
            className="contact__input contact__textarea"
          ></textarea>
          <button className="button">
            Send Message <span className="send__icon">≫</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
