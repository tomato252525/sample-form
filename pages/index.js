import { useState } from "react";

export default function Home() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = values;

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };
  return (
    <>
      <h2>Next.js Sendgrid form submission</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h3>Contact Form</h3>
          <div className="input_container">
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name..."
              className="input"
            />
          </div>
          <div className="input_container">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email..."
              className="input"
            />
          </div>
          <div className="input_container">
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              placeholder="Enter your message..."
              className="input"
            />
          </div>
          <div className="btn_container">
            <button>Send</button>
          </div>
        </form>
      </div>
    </>
  );
}