import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactForm(props) {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID,
                         process.env.REACT_APP_TEMPLATE_ID, 
                         form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            props.setSubmitted(true)
        }, (error) => {
            console.log(error.text);
        });
    };


    //resource https://www.positronx.io/how-to-build-a-simple-contact-form-in-react-js-app/

    return (
            <form ref={form} onSubmit={sendEmail} className="flex flex-col mx-4 w-1/2">
                <div className="flex flex-col">
                <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                </div>
                <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name"/>
                </div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                </div>
                <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message"> Message </label>
                    <input className="h-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="message" required />                
                </div>
                <div className="flex flex-row-reverse">
                <button type="submit" className="flex bg-[#99d1b8] rounded-xl justify-center w-16 my-2">
                    Send
                </button>
                </div>
                </div>
            </form>
        )
}