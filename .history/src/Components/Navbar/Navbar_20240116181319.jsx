import React from "react";

const Navbar = () => {
    return(
        <div className="h-screen m-10vh flex justify-between">
            <div className="flex items-center flex gap-8">
                <div>Kennedy</div>
                <span>Test</span>
            </div>
            <div>
                <div>
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