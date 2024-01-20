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
        <div className="flex items-center justify-between rounded-full border-4 border-violet-500 relative cursor-grab
        w-14 h-6 text-violet-500">
                <Moon />
                <Sun />
         
            <div className="rounded-full p-[7px] absolute bg-violet-500 border-4 border-violet-500"
            onClick={handleClick}
                style = {darkMode? {left: '3px'} : {right : '2px'}}>
                    
            </div>
        </div>
    )
}

export default Toggle;