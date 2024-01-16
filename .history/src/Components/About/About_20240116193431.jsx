import React from "react";

const About = () => {
    return(
        <div className="flex h-[77vh] my-24">
            <div className="flex relative flex-1">
                <div>
                    <span>Hi! I am</span>
                    <span>Kennedy Wanderson</span>
                    <span>Frontend Developer with high level of experience
                        in web development, producting the Quality work                   </span>
                </div>
                <button className="rounded-3xl	border-none	text-white text-base pt-3 p-3 pr-6 pl-6 bg-gradient-to-r from-violet-500 to-fuchsia-500
                hover:cursor-grab bg-white hover:text-orange-500">Hire me</button>
            </div>
            <div className="flex-1">
                rigth side
            </div>
        </div>
    )
}

export default About;