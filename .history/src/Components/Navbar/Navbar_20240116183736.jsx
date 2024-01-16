import React from "react";

const Navbar = () => {
    return(
        <div className="h-screen p-10vh flex justify-between">
            <div className="flex-1 flex items-center gap-8">
                <div className="text-2xl font-bold">Kennedy</div>
                <span>Test</span>
            </div>
            <div className="flex flex-1 items-center justify-center font-normal">
                <div className="flex">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <button>Contact</button>
            </div>
        </div>
    )
}

export default Navbar;