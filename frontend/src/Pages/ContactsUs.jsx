import "./CSS/ContactsUs.css";

function ContactsUs() {
  return (
    <section className="content-section">
      <h2 className="section-title">Contact Us</h2>
      <div className="section-content">
        <ul className="contact-info-list">
          <li className="contact-info">
            <i className="fa-solid fa-location-crosshairs"></i>
            <p>kabul Afghanistan</p>
          </li>
          <li className="contact-info">
            <i className="fa-regular fa-envelope"></i>
            <p>SahakEcommerce.shop@gmail.com</p>
          </li>
          <li className="contact-info">
            <i className="fa-solid fa-phone"></i>
            <p>(093) 748 101 784</p>
          </li>
          <li className="contact-info">
            <i className="fa-regular fa-clock"></i>
            <p>Saturday - Wednesday 8:00 Am - 4:00 PM</p>
          </li>
          <li className="contact-info">
            <i className="fa-regular fa-clock"></i>
            <p>Thursday 8:00 Am - 12:00 PM</p>
          </li>
          <li className="contact-info">
            <i className="fa-regular fa-clock"></i>
            <p>Friday: Close</p>
          </li>
          <li className="contact-info">
            <i className="fa-solid fa-globe"></i>
            <p>www.sahakweb.com</p>
          </li>
        </ul>
        <form
          action="https://formsubmit.co/dream468bob@gmail.com"
          method="POST"
          className="contact-form"
        >
          <input
            type="text"
            placeholder="Your name *"
            className="form-input"
            required
          />
          <input
            type="email"
            placeholder="Your email *"
            className="form-input"
            required
          />
          <textarea
            placeholder="Your massage *"
            className="form-input"
            required
          ></textarea>
          <button className="submit-button">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactsUs;
