import React from "react";
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'

const Toggle = () => {
    return (
        <div className="flex justify-between rounded-full border-4 border-violet-500 relative p-2 cursor-grab
        w-16 h-4 text-violet-500">
            <div className="flex ">
                <Moon />
                <Sun />
            </div>
            <div className=" rounded-full absolute bg-violet-500">

            </div>
        </div>
    )
}

export default Toggle;