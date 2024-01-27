import React, { useContext, useState } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nloztkk', 'template_w0nf8e5', form.current, 'l4pVECB3jFJ-edbZo')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="m-3 pt-0 pr-4 pb-0 pl-4 md:pr-12 md:pl-12 mt-16 flex flex-col md:flex-row h-[80vh]">
            <div className="md:mr-8">
                <div className="flex flex-col">
                    <span style={{ color: darkMode ? 'white' : '' }} className="text-black font-bold text-4xl">Get in touch</span>
                    <span className="text-violet-500 font-bold text-5xl">Contact me</span>
                </div>
            </div>

            <div className="flex justify-center relative mt-4 md:mt-0">
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-8 items-center w-full md:w-80">
                    <input type="text" name="user_name" className="w-full h-8 p-2 outline-none border-2 border-violet-500 rounded-lg text-base" placeholder="Name" />
                    <input type="email" name="user_email" className="w-full h-8 p-2 outline-none border-2 border-violet-500 rounded-lg text-base" placeholder="Email" />
                    <textarea name="message" className="w-full h-16 p-2 outline-none border-2 border-violet-500 rounded-lg text-base" placeholder="Message" />
                    <input type="submit" value="Send" className="rounded-3xl border-none text-white text-base pt-3 p-3 pr-6 pl-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:cursor-grab bg-white hover:text-orange-500 w-full" />
                    <span className="text-center text-green-500 font-bold text-xl">{done && "Thanks for contacting me!"}</span>
                </form>
            </div>
        </div>
    )
}

export default Contact;
