import React, { useContext } from "react";
import HeartEmoji from '../../img/heartemoji.png'
import Card from "../Card/Card";
import Resume from './Kennedy_CV.pdf'
import { themeContext } from "../../Context";
import { motion } from 'framer-motion'
import ReactIimg from '@iconscout/react-unicons/icons/uil-react'

const Services = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (

        <div className="pt-0 pb-12 pr-3 pl-12 flex h-[90vh] mt-10 lg:mt-0 flex-col gap-5 h-[66rem] p-0" id="About">
            <div className="flex flex-col relative">
                <span style={{ color: darkMode ? 'white' : '' }} className="text-black text-4xl font-bold">My Awesome</span>
                <span className="text-violet-500 font-bold text-5xl">services</span>
                <spane style={{ color: darkMode ? 'white' : '' }} className="text-gray-600 text-sm mt-4">Lorem ispum is simpley dummy text of printing of printing Lorem

                    <br />
                    ispum is simpley dummy text of printing
                </spane>
                <a href={Resume} download>
                    <button className="rounded-3xl	border-none	text-white text-base pt-3 p-3 pr-6 pl-6 bg-gradient-to-r from-violet-500 to-fuchsia-500
                    hover:cursor-grab bg-white hover:text-orange-500 w-36 mt-4">Download CV</button>
                </a>
            </div>
            <div className="relative sm:flex lg:flex lg:flex-col gap-17rem lg:static">
                <div className="left-56 absolute lg:static lg:absolute">
                    <Card className=""
                        emoji={HeartEmoji}
                        heading={'Skills'}
                        detail={'React, JavaScript, TypeScript'}
                    />
                </div>
                {/* <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spriing' }}
                >
                    <div>
                        <img src={ReactIimg} alt="" />
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>

                </motion.div> */}
            </div>
        </div>
    )
}

export default Services;