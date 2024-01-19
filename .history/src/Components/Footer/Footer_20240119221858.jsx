import React from "react";
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Git from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
    return(
        <div>
            <img src={Wave} alt="" style={{width: '100%'}} />
            <div>
                <span>devprogrammer.wiz@gmail.com</span>
                <div>
                    <Insta color='white' size={} />
                </div>
            </div>
        </div>
    )
}

export default Footer;