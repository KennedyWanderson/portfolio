import React from "react";
import '../../App.css'

const Card = ({emoji, heading, detail}) =>{
    return(
        <div className=" w-56 absolute flex flex-col gap-4 items-center w-40 text-center bg-gray-100 
        rounded-xl border-4 border-violet-500 shadow-lg pt-0 pr-7 pb-6 pl-7">
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span className="text-gray-500 text-xl">{detail}</span>
            <button>Learn More</button>
        </div>
    )
}

export default Card;