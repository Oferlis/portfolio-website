import { useState } from "react";
import ContactForm from "./contactForm";

export default function Contact() {
    const [isFormSubmitted, setFormSubmitted] = useState(false)

    return (<div id="contact" className="div-ex contact-div">
            <h2 className="get-together-text">
                Let's get together <br></br> ☕
            </h2>
            <div className="form-div">
                {isFormSubmitted ? (<div className="w-3/4">Form Sent! we'll be in touch!</div>) : <ContactForm setSubmitted={setFormSubmitted}/>}
                </div>
            </div>
            )
}