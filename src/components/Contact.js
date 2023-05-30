import { useState } from "react";
import ContactForm from "./contactForm";

export default function Contact() {
    const [isFormSubmitted, setFormSubmitted] = useState(false)

    return (<div id="contact" className="flex h-96 flex-row items-center place-content-around md:mx-20 my-4 bg-[#c9e4eb] rounded-lg shadow-xl font-montserrat">
            <h2 className="text-2xl md:text-4xl mx-4 mb-4 w-1/4">
                Let's get together 👋 
            </h2>
                {isFormSubmitted ? (<div className="w-1/2">Form Sent! we'll be in touch!</div>) : <ContactForm setSubmitted={setFormSubmitted}/>}
            <style jsx="true">
            {`
                
            `}
            </style>
            </div>
            )
}