import React from "react";
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Git from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
    return (
        <div className="relative">
            <img src={Wave} alt="" className="w-full" />
            <div className="absolute top-16 text-white w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                <span className="block mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">devprogrammer.wiz@gmail.com</span>
                <div className="flex gap-8 lg">
                    <Insta color='white' size='3rem' />
                    <Git color='white' size='3rem' />
                    <Linkedin color='white' size='3rem' />
                </div>
            </div>
        </div>
    )
}

export default Footer;
