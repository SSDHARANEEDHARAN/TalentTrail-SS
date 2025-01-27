"use client";
import emailjs from "emailjs-com";
import { useState } from "react";

const ContactForm = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    budget: "",
    subject: "",
    message: "",
    template: "Thara react",
  });

  const { name, email, budget, subject, message, template } = mailData;
  const [error, setError] = useState(null);
  const [fieldError, setFieldError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(mailData);
    if (
      name.length === 0 ||
      email.length === 0 ||
      budget.length === 0 ||
      subject.length === 0 ||
      message.length === 0
    ) {
      setFieldError(true);
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_gsps4gw", // service id
          "template_evezi69", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setFieldError(false);
            setMailData({
              name: "",
              email: "",
              message: "",
              subject: "",
              budget: "",
              template: "Thara react",
            });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <div className="leave-comments-area">
      <div className="comments-box">
        <form onSubmit={(e) => onSubmit(e)} id="contact-form">
          <div className="row gx-3">
            <div className="col-md-6">
              <div className="mb-4">
                <label className="form-label">Name</label>
                <input
                  name="name"
                  onChange={(e) => onChange(e)}
                  value={name}
                  required=""
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <label className="form-label">Email</label>
                <input
                  name="email"
                  onChange={(e) => onChange(e)}
                  value={email}
                  required=""
                  type="email"
                  className="form-control shadow-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <label className="form-label">Subject</label>
                <input
                  name="subject"
                  onChange={(e) => onChange(e)}
                  value={subject}
                  required=""
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <label className="form-label">Budget</label>
                <select
                  name="budget"
                  onChange={(e) => onChange(e)}
                  value={budget}
                  required=""
                  className="form-select shadow-none"
                  defaultValue={"select"}
                >
                  <option disabled={true} value={"select"}>
                    Select budget...
                  </option>
                  <option value="₹5000">₹5000</option>
                  <option value="₹5000 - ₹10000">₹5000 - ₹10000</option>
                  <option value="₹10000 - ₹20000">₹10000 - ₹20000</option>
                  <option value="₹20000">₹20000+</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-4">
                <label className="form-label">Comment</label>
                <textarea
                  name="message"
                  onChange={(e) => onChange(e)}
                  value={message}
                  className="form-control shadow-none"
                  rows={4}
                  placeholder="Type details about your inquiry"
                />
              </div>
            </div>
            <div className="col-md-12">
              <button className="submit-btn" type="submit">
                Send Message
                <svg
                  className="icon"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 11.6665V6.6665H12.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 6.6665L10 14.1665L2.5 6.6665"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
        <p
          className={`ajax-response mb-0 ${error ? "error" : "success"}`}
          style={{ display: error == null ? "none" : "block" }}
        >
          {error
            ? "Please complete the form and try again."
            : "Thank You! Your message has been sent."}
        </p>
      </div>
    </div>
  );
};
export default ContactForm;
