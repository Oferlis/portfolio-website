import { useRef, useState } from "react";
import ContactForm from "./contactForm";

export default function Contact() {
    const [isFormSubmitted, setFormSubmitted] = useState(false)
    
    //resource https://www.positronx.io/how-to-build-a-simple-contact-form-in-react-js-app/

    return (<div className="flex h-96 flex-row items-center place-content-around  mx-24 bg-[#c9e4eb] rounded-lg drop-shadow-xl">
            <h2 className="text-4xl mx-4 mb-4 w-1/4">
                Let's get together 👋 
            </h2>
                {isFormSubmitted ? (<div className="w-1/2">Form Sent! we'll be in touch!</div>) : <ContactForm setSubmitted={setFormSubmitted}/>}
            </div>)
}