import React, { useContext } from "react";
import HeartEmoji from '../../img/heartemoji.png'
import Card from "../Card/Card";
import Resume from './Kennedy_CV.pdf'
import './Services.css'
import { themeContext } from "../../Context";
import JavaImg from '../../img/js.jpg'
import TypeImg from '../../img/typescript.png'
import ReactIimg from '../../img/react.png'
import NextImg from '../../img/next.png'
import HtmlImg from '../../img/html.png'
import CssImg from '../../img/css.png'
import TailwindImg from '../../img/tailwind.png'
import BootImg from '../../img/boostrap.png'

const Services = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (

        <div className=" flex h-full  services" id="About">
            <div className="flex flex-col justify-center relative ">
                <span style={{ color: darkMode ? 'white' : '' }} className="text-black text-4xl font-bold">My </span>
                <span className="text-violet-500 font-bold text-5xl">Skills</span>
                <spane style={{ color: darkMode ? 'white' : '' }} className="text-gray-600 text-sm mt-4">Analyst and Developer with experience in programming, development of web systems. 

                    {/* <br /><br/>Tecnologies ----><br />
                    JavaScript/ TypeScript / React / Next / HTML / CSS / Tailwind / Bootstrap */}
                </spane>
                <a href={Resume} download>
                    <button className="rounded-3xl border-none	text-white text-base pt-3 p-3 pr-6 pl-6 bg-gradient-to-r from-violet-500 to-fuchsia-500
                    hover:cursor-grab bg-white hover:text-orange-500 w-36 mt-4">Download CV</button>
                </a>
            </div>
            {/* <div className="flex flex-col justify-center relative cards">
                <div style={{ color: darkMode ? 'black' : '' }} className="left-56 absolute">
                    <Card
                        emoji={HeartEmoji}
                        heading={'Skills'}
                        detail={[JavaImg, TypeImg, ReactIimg, NextImg, HtmlImg, CssImg, TailwindImg, BootImg]}
                        
                    />
                </div>
            </div> */}
        </div>
    )
}

export default Services;