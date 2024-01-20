import React, { useContext } from "react";
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from "../../Context";

const Toggle = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        theme.
    }

    return (
        <div className="flex justify-between rounded-full border-4 border-violet-500 relative p-2 cursor-grab
        w-20 h-10 text-violet-500">
                <Moon />
                <Sun />
         
            <div className=" rounded-full absolute bg-violet-500"
            onClick={handleClick}
                style = {darkMode? {left: '2px'} : {right : '2px'}}>
            </div>
        </div>
    )
}

export default Toggle;