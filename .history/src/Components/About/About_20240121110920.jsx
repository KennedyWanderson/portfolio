import React, { useContext } from "react";
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import Linkedin from '../../img/linkedin.png'
import Profile from '../../img/eu.png'
import './About.css'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import { themeContext } from "../../Context";
import { motion } from 'framer-motion'
import glassesemoji from '../../img/glassesimoji.png'

const About = () => {
    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="lg:flex lg:flex-row flex-col h-[77vh] my-20">
            <div className="flex flex-col relative flex-1 lg:gap-8 lg:mr-10">
                <div className="flex flex-col lg:text-left text-center">
                    <span style={{ color: darkMode ? 'white' : '' }} className="text-black font-bold text-5xl">Hi! I am</span>
                    <span className="text-violet-500 font-bold text-5xl">Kennedy Wanderson</span>
                    <span>Frontend Developer with high level of experience
                        in web development, producing quality work                   </span>
                </div>
                <button className="rounded-3xl border-none text-white text-base pt-3 p-3 pr-6 pl-6 bg-gradient-to-r from-violet-500 to-fuchsia-500
                hover:cursor-grab bg-white hover:text-orange-500 w-28 h-8 flex justify-center items-center lg:mt-6">Hire me</button>
                <div className="sm:scale-80 sm:-3rem mt-6 flex gap-7 hover:cursor-grab lg:mt-0">
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
            <div className="i-right lg:flex lg:justify-end">
                <img src={Vector1} alt="" className="lg:mr-2" />
                <img src={Vector2} alt="" className="lg:mr-2" />
                <img src={Profile} alt="" className="lg:mr-2" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                    src={glassesemoji} alt=""
                />
            </div>
        </div>
    )
}

export default About;
