import React from "react";
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Git from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
    return(
        <div className=" flex items-center mt-[-0.5rem] mb-[-3.5rem] relative">
            <img src={Wave} alt="" style={{width: '100%'}}/>
            <div className="sm:scale-50 flex flex-col items-center justify-center absolute w-full mt-16 gap-16 text-white">
                <span>devprogrammer.wiz@gmail.com</span>
                <div className="flex gap-8">
                    <Insta color='white' size='3rem' />
                    <Git color='white' size='3rem' />
                    <Linkedin color='white' size='3rem' />
                </div>
            </div>
        </div>
    )
}

export default Footer;