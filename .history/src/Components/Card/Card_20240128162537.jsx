import React from "react";
import '../../App.css'

const Card = ({ emoji, heading, detail }) => {
    return (
        <div className="card w-72 absolute flex flex-col gap-4 items-center text-center bg-gray-100 
        rounded-xl border-4 border-violet-500 shadow-lg pt-0 pr-7 pb-6 pl-7">
            <img className="scale-50 mb-[-2rem]" src={emoji} alt="" />
            <span>{heading}</span>
            <div className="images-container flex justify-center flex-wrap">
                {detail.map((img, index) => (
                    <img key={index} className="flex text-red-500 text-base w-10 h-6 mb-2" src={img} alt={`Image ${index + 1 }`} />
                ))}
            </div>
            <button>Learn More</button>
        </div>
    )
}

export default Card;
