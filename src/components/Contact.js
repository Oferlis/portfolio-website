import { useState } from "react";
import ContactForm from "./contactForm";

export default function Contact() {
    const [isFormSubmitted, setFormSubmitted] = useState(false)

    return (<div id="contact" className="div-ex contact-div">
            <h2 className="text-2xl md:text-4xl mx-4 mb-4 w-1/2">
                Let's get together <br></br> ☕
            </h2>
                {isFormSubmitted ? (<div className="w-1/2">Form Sent! we'll be in touch!</div>) : <ContactForm setSubmitted={setFormSubmitted}/>}
            </div>
            )
}