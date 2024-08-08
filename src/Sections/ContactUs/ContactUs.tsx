import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactus" id="contact-us">
      <div className="image">
        <div className="content p-3">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            asperiores consectetur, recusandae ratione provident necessitatibus,
            cumque delectus commodi fuga praesentium beatae.
          </p>
          <img decoding="async" src="imgs/contact us.png" alt="" />
        </div>
      </div>
      <div className="form">
        <div className="content">
          <h2>Request A contact us</h2>
          <form>
            <input
              className="input"
              type="text"
              placeholder="Your Name"
              name="name"
            />
            <input
              className="input"
              type="email"
              placeholder="Your Email"
              name="email"
            />
            <input
              className="input"
              type="text"
              placeholder="Your Phone"
              name="mobile"
            />
            <textarea
              className="input"
              placeholder="Tell Us About Your Needs"
              name="message"
              defaultValue={""}
            />
            <input type="submit" defaultValue="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
