import React, { useContext } from "react";
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import Linkedin from '../../img/linkedin.png'
import Profile from '../../img/eu.jpeg'
import './About.css'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import { themeContext } from "../../Context";
import {motion} from 'framer-motion'
import glassesemoji from '../../img/glassesimoji.png'


const About = () => {

    const transition = {duration: 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="lg:flex lg:flex-row flex-col h-[77vh] about">
            <div className="flex flex-col justify-center relative flex-1 gap-8">
                <div className="flex flex-col ">
                    <span style={{color: darkMode? 'white': ''}} className="text-black font-bold text-5xl">Hi! I am</span>
                    <span className="text-violet-500 font-bold text-5xl">Kennedy Wanderson</span>
                    <span>Frontend Developer with high level of experience
                        in web development, producting the Quality work                   </span>
                </div>
                <a href="https://www.linkedin.com/in/kennedy-wanderson/" className="rounded-3xl	border-none	text-white text-base pt-3 p-3 pr-6 pl-6 bg-gradient-to-r from-violet-500 to-fuchsia-500
                hover:cursor-grab bg-white hover:text-orange-500 w-28 h-8 flex justify-center items-center">Hire me</a>
                <div className="mt-6 flex gap-7 hover:cursor-grab left">
                    <a href="https://github.com/KennedyWanderson">
                        <img src={Github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/kennedy-wanderson/">
                        <img src={Linkedin} alt="" />
                    </a>
                    <a href="https://www.instagram.com/_dev.kennedy/">
                        <img src={Instagram} alt="" />
                    </a>
                </div>
            </div>
            <div className="justify-center w-6/12">

                <img className="rounded-full " src={Profile} alt="" />
                {/* <motion.img
                initial={{left: '-46%'}}
                whileInView={{left: '-14%'}}
                transition={transition}
                src={glassesemoji} alt="" /> */}
            </div>
        </div>
    )
}

export default About;