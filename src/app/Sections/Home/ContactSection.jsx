
import Image from 'next/image';
import "./Intro.css"

export default function ContactSection() {
  return (
    <div className="container-contact">
      {/* Banner Section */}
      <div className='first-container'>
        <div className="banner">
        </div>
        <h1 className="bannerText">GET IN TOUCH</h1>
        {/* Contact Form Section */}
        <div className="contactSection">
          <form className="form">
            <div className="inputGroup">
              <div className="inputField">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="inputField">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>
            </div>
            <div className="textareaField">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>

        </div>

        {/* Contact Details Section */}

      </div>
      <div className='secondContainer'>
        <div className="details">
          <h2>Have A Project In Your Mind?</h2>
          <p>
            Have a project in mind that needs a creative touch? Let’s bring your
            vision to life. Whether it’s a personal shoot, event coverage, or a
            brand campaign, we’re here to collaborate and capture moments that
            truly resonate. Contact us today to discuss your ideas and get started!
          </p>
          <div className="contactInfo">
            <div className="infoItem">
              <span>📞</span> <p>+91 9381610565</p>
            </div>
            <div className="infoItem">
              <span>📧</span> <p>eternalvisionstudio@gmail.com</p>
            </div>
            <div className="infoItem">
              <span>📍</span> <p>Carshed, Madhurawada, Visakhapatnam, 530048</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

