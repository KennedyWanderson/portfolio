import React from "react";

const Card = ({emoji, heading, detail}) =>{
    return(
        <div>
            <img src={emoji} alt="" />
        </div>
    )
}

export default Card;