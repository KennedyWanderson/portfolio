import React from "react";
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glassesimoji.png'
import Humble from '../../img/humble.png'
import Card from "../Card/Card";
import Resume from ''

const Services = () => {
    return(
        <div className="pt-0 pb-12 pr-3 pl-12 flex h-[90vh] mb-32 mt-36 mb-52">
            <div className="flex flex-col relative">
                <span className="text-black text-4xl font-bold">My Awesome</span>
                <span className="text-violet-500 font-bold text-5xl">services</span>
                <spane className="text-gray-600 text-sm mt-4">Lorem ispum is simpley dummy text of printing of printing Lorem

                <br />
                ispum is simpley dummy text of printing
                </spane>
                <a href={Resume} download>
                    <button className="rounded-3xl	border-none	text-white text-base pt-3 p-3 pr-6 pl-6 bg-gradient-to-r from-violet-500 to-fuchsia-500
                </a>
                hover:cursor-grab bg-white hover:text-orange-500 w-36 mt-4">Download CV</button>
            </div>
            <div className="relative">
                <div className="left-56 absolute">
                    <Card 
                    emoji={HeartEmoji}
                    heading={'Skills'}
                    detail={'React, JavaScript, TypeScript'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Services;