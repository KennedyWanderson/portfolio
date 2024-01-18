import React from "react";
import '../../App.css'

const Card = ({emoji, heading, detail}) =>{
    return(
        <div className=" w-40 h-58 absolute flex flex-col gap-4 items-center w-40 text-center bg-gray-100 border-v">
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
        </div>
    )
}

export default Card;