import React from "react";

const Contact = () => {
    return(
        <div>
            <div>
                <div>
                    <span>Get in touch</span>
                    <span>Contact me</span>
                </div>
            </div>

            <div>
                <form action="">
                    <input type="text" name="user_name" className="" placeholder="Name" />
                    <input type="email" name="user_email" className="" placeholder="Email" />
                    <textarea  name="message" className="" placeholder="Message" />
                    <input type="submit" name="user_name" className="" placeholder="Name" />

                </form>
            </div>
        </div>
    )
}

export default Contact;