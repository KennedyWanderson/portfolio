import React from "react";
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Git from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
    return(
        <div className=" flex items-center mt-[-0.5rem] mb-[-3.5rem] relative">
            <img src={Wave} alt="" className="w-full h-52"/>
            <div className=" flex flex-col items-center justify-center absolute w-full mt-16 gap-8  text-white">
                <span className="">kennedywprad</span>
                <div className="flex gap-8">
                    <a href="https://www.instagram.com/_dev.kennedy/">
                        <Insta color='white' size='3rem' />
                    </a>
                    <a href="https://github.com/KennedyWanderson">
                        <Git color='white' size='3rem' />
                    </a>
                    <a href="https://www.linkedin.com/in/kennedy-wanderson/">
                        <Linkedin color='white' size='3rem' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;