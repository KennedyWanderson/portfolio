import React from "react";
import '../../App.css'

const Card = ({emoji, heading, detail}) =>{
    return(
        <div className="w-56 lg:w-full absolute flex flex-col gap-4 items-center w-40 text-center bg-gray-100 
        rounded-xl border-4 border-violet-500 shadow-lg pt-0 pr-7 pb-6 pl-7">
            <img className="scale-50 mb-[-2rem] lg" src={emoji} alt="" />
            <span>{heading}</span>
            <span className="text-gray-500 text-base">{detail}</span>
            <button>Learn More</button>
        </div>
    )
}

export default Card;