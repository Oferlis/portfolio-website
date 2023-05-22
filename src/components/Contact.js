import { useState } from "react"

export default function Contact() {
    const [formStatus, setFormStatus] = useState('Send')
    const handleSubmit = (e) => {

    }

    //resource https://www.positronx.io/how-to-build-a-simple-contact-form-in-react-js-app/

    return (<div className="flex h-96 flex-col mx-24">
        <h2>
            Contact me
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-60">
            <div className="flex flex-col">
                <label htmlFor="name">Name </label>
                <input type="text" id="name" required/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="email">E-mail </label>
                <input type="text" id="email" required/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="message">Message </label>
                <input className="h-24" type="text" id="message" required/>                
            </div>
            <button type="submit" className="flex bg-[#7e8799] rounded-xl justify-center w-16 my-2">
                {formStatus}
            </button>
        </form>
    </div>)
}