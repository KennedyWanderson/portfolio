import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Navbar = () => {
    return(             //h-screen
        <div className="h-[10vh] flex justify-between">
            <div className="flex-1 flex items-center gap-8">
                <div className="text-2xl font-bold">Kennedy</div>
                <span>Test</span>
            </div>
            <div className="flex flex-1 items-center justify-center font-normal">
                <div className="flex-grow-10">
                    <ul className="flex gap-8 mr-32 hover:cursor-grab">
                        <li href={About} className="hover:text-orange-500">Home</li>
                        <li className="hover:text-orange-500">About</li>
                        <li className="hover:text-orange-500">Projects</li>
                    </ul>
                </div>
                <button onClick={Contact} className=" rounded-3xl	border-none	text-white text-base pt-3 p-3 pr-6 pl-6 bg-gradient-to-r from-violet-500 to-fuchsia-500
                hover:cursor-grab bg-white hover:text-orange-500
                ">Contact</button>
            </div>
        </div>
    )
}

export default Navbar;