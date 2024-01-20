import React, { useContext } from "react";
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from "../../Context";

const Toggle = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        theme.dispatch({type: 'toggle'})
    }

    return (
        <div onClick={handleClick} className="flex items-center justify-between rounded-full m-1 border-2 border-violet-500 relative cursor-grab
        w-14 h-7 text-violet-500">
                <Moon />
                <Sun />  
            <div className="rounded-full p-[6.5px] absolute bg-violet-500 border-4 border-violet-500"
                style = {darkMode? {left: '2px'} : {right : '2px'}}>             
            </div>
        </div>
    )
}

export default Toggle;