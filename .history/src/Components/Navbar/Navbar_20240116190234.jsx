import React from "react";

const Navbar = () => {
    return(             //h-screen
        <div className="p-10vh flex justify-between">
            <div className="flex-1 flex items-center gap-8">
                <div className="text-2xl font-bold">Kennedy</div>
                <span>Test</span>
            </div>
            <div className="flex flex-1 items-center justify-center font-normal">
                <div className="flex-grow-10">
                    <ul className="flex gap-8 mr-32 hover:cursor-grab">
                        <li className="hover:text-orange-500">Home</li>
                        <li className="hover:text-orange-500">About</li>
                        <li className="hover:text-orange-500">Projects</li>
                    </ul>
                </div>
                <button className=" rounded-3xl	border-none	text-white text-base p">Contact</button>
            </div>
        </div>
    )
}

export default Navbar;