import React from "react";
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glassesimoji.png'
import Humble from '../../img/humble.png'

const Services = () => {
    return(
        <div className="pt-0 pb-12 pr-3 pl-12 flex h-[90vh] mb-32 mt-36 mb-52">
            <div className="flex flex-col relative">
                <span className="text-black text-4xl font-bold">My Awesome</span>
                <span className="text-violet-500 font-bold text-5xl">services</span>
                <spane className="text-gray-300 text-sm mt-">Lorem ispum is simpley dummy text of printing of printing Lorem

                <br />
                ispum is simpley dummy text of printing
                </spane>
                <button className="rounded-3xl	border-none	text-white text-base pt-3 p-3 pr-6 pl-6 bg-gradient-to-r from-violet-500 to-fuchsia-500
                hover:cursor-grab bg-white hover:text-orange-500">Download CV</button>
            </div>
            <div>
                teste
            </div>
        </div>
    )
}

export default Services;