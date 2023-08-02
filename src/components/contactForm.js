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
    <form ref={form} onSubmit={sendEmail} className="">
      <label htmlFor="website-admin" className="">
        Name
      </label>
      <div className="">
        <input type="text" name="name" placeholder="Your name" />
      </div>
      <label htmlFor="email" className="">
        Your Email
      </label>
      <input
        type="email"
        name="email"
        className=""
        placeholder="you@your-domain.com"
      />

      <div className="flex flex-col">
        <label htmlFor="message" className="text-left">
          {" "}
          Message{" "}
        </label>
        <input type="text" name="message" required />
      </div>
      <div className="">
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
