import React from "react";
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import Linkedin from '../../img/linkedin.png'
import Profile from '../../img/eu.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'



const About = () => {
    return (
        <div className="flex h-[77vh] my-24">
            <div className="flex flex-col relative flex-1 gap-8">
                <div className="flex flex-col">
                    <span className="text-black font-bold text-5xl">Hi! I am</span>
                    <span className="text-violet-500 font-bold text-5xl">Kennedy Wanderson</span>
                    <span>Frontend Developer with high level of experience
                        in web development, producting the Quality work                   </span>
                </div>
                <button className="rounded-3xl	border-none	text-white text-base pt-3 p-3 pr-6 pl-6 bg-gradient-to-r from-violet-500 to-fuchsia-500
                hover:cursor-grab bg-white hover:text-orange-500 w-28 h-8 flex justify-center items-center">Hire me</button>
                <div className="mt-12 flex gap-8 scale-50 hover:cursor-grab">
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
            <div className="flex-1 relative">
                <div className="z-1 absolute">
                    <img className="scale-75 left-neg-15 top-neg-9" src={Vector1} alt="" />
                    <img className="scale-75 left-neg-15 top-neg-9" src={Vector2} alt="" />
                    <img className="scale-145 left-neg-15 top-neg-9" src={Profile} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About;