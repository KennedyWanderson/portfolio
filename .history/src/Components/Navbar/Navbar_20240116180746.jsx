import React from "react";

const Navbar = () => {
    return(
        <div className="h-screen p-10vh">
            <div>
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