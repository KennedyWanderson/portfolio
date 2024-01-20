import React from "react";
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'

const Toggle = () => {
    return (
        <div className="flex justify-between rounded-2xl border-4 border-violet-500 relative p-2 cursor-grab
         w-10 h-4 text-violet-500">
            <Moon />
            <Sun />
            <div>

            </div>
        </div>
    )
}

export default Toggle;