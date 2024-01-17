import React from "react";
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import Linkedin from '../../img/linkedin.png'

const About = () => {
    return(
        <div className="flex h-[77vh] my-24">
            <div className="flex flex-col relative flex-1">
                <div className="flex flex-col">
                    <span className="text-black font-bold text-5xl">Hi! I am</span>
                    <span className="text-violet-500 font-bold text-5xl">Kennedy Wanderson</span>
                    <span>Frontend Developer with high level of experience
                        in web development, producting the Quality work                   </span>
                </div>
                <button className="rounded-3xl	border-none	text-white text-base pt-3 p-3 pr-6 pl-6 bg-gradient-to-r from-violet-500 to-fuchsia-500
                hover:cursor-grab bg-white hover:text-orange-500">Hire me</button>
                <div>
                    <img src={Github} />
                    <img src={Linkedin} />
                    <img src={Ins} />
            </div>
            <div className="flex-1">
                rigth side
            </div>
        </div>
    )
}

export default About;