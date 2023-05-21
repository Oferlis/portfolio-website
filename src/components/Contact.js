import { useState } from "react"

export default function Contact() {
    const [formStatus, setFormStatus] = useState('Send')
    const handleSubmit = (e) => {

    }

    //resource https://www.positronx.io/how-to-build-a-simple-contact-form-in-react-js-app/

    return (<div className="flex h-96 flex-col">
        <h2>
            Contact me
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div>
                <label htmlFor="name">Name </label>
                <input type="text" id="name" required/>
            </div>
            <div>
                <label htmlFor="email">E-mail </label>
                <input type="text" id="email" required/>
            </div>
            <div>
                <label htmlFor="message">Message </label>
                <input type="text" id="message" required/>                
            </div>
            <button type="submit" className="flex justify-start">
                {formStatus}
            </button>
        </form>
    </div>)
}