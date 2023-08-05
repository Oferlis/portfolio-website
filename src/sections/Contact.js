import { useState } from "react";
import ContactForm from "../components/contactForm";
import SectionSeperator from "../components/sectionSeperator";

export default function Contact() {
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  return (
    <div id="contact" className="contact-div">
      <SectionSeperator sectionName="Let's get together" />
      {isFormSubmitted ? (
        <div className="form-div">Form Sent! we'll be in touch!</div>
      ) : (
        <ContactForm setSubmitted={setFormSubmitted} />
      )}
    </div>
  );
}
