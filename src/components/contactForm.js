import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm(props) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          props.setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form-div">
      <label htmlFor="website-admin"></label>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <input type="text" name="name" placeholder="Your name" />
        <label htmlFor="email"></label>
        <input type="email" name="email" placeholder="you@your-domain.com" />
      </div>
      <input
        type="text"
        name="title"
        placeholder="Title"
        style={{ width: "99%" }}
      />
      <div className="">
        <label htmlFor="message"></label>
        <textarea
          type="text"
          rows="5"
          name="message"
          placeholder="Message"
          required
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
