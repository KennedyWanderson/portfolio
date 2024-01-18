import React from "react";

const Contact = () => {
    return(
        <div className="pt-0 pr-12 pb-0 pl-12 mt-16 flex h-[80vh]">
            <div>
                <div>
                    <span>Get in touch</span>
                    <span>Contact me</span>
                </div>
            </div>

            <div className="flex justify-center relative flex-1">
                <form className="flex flex-col gap-8 items-center" action="">
                    <input type="text" name="user_name" className=" w-80 h-8 p-2 outline-none border-2 rounded-lg te" placeholder="Name" />
                    <input type="email" name="user_email" className="" placeholder="Email" />
                    <textarea  name="message" className="h-16" placeholder="Message" />
                    <input type="submit" value="Send" className="" />

                </form>
            </div>
        </div>
    )
}

export default Contact;