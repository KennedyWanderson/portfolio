import React from "react";
import '../../App.css'

const Card = ({emoji, heading, detail}) =>{
    return(
        <div className=" w-40 h-58 absolute flex flex-col gap-4 items-center w-40 text-center bg-gray-100 
        rounded-xl border-4 border-violet-500 pt-4 pb-4 ">
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
        </div>
    )
}

export default Card;