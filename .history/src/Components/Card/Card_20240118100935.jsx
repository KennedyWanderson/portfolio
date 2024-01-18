import React from "react";

const Card = ({emoji, heading, detail}) =>{
    return(
        <div>
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span></span>
        </div>
    )
}

export default Card;