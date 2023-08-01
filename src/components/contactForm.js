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
    <form ref={form} onSubmit={sendEmail} className="flex flex-col">
      <div className="flex flex-col">
        <label htmlFor="website-admin" className="">
          Name
        </label>
        <div className="">
          <input
            type="text"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your name"
          />
        </div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 text-left"
        >
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
          <input
            className="h-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="message"
            required
          />
        </div>
        <div className="">
          <button type="submit">Send</button>
        </div>
      </div>
    </form>
  );
}
