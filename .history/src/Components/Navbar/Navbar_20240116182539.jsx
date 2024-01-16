import React from "react";

const Navbar = () => {
    return(
        <div className="p-10vh flex justify-between">
            <div className=" flex-1 items-center gap-8">
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