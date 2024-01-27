import React, { useContext } from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Admin from '../../img/admin.jpeg'
import Movie from '../../img/movie.jpeg'
import Netflix from '../../img/netflix.jpeg'
import { themeContext } from "../../Context";
import Burguer from '../../img/burguer.jpeg'

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return(
        <div className="flex flex-col items-center justify-center h-[70vh] mb-10" id="Projects">
            <span style={{color: darkMode? 'white': ''}} className="text-black font-bold text-4xl">My projects</span>


            <Swiper spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="overflow-visible w-full mt-12 h-56">
                <SwiperSlide className="w-80 p-2">
                    <img className="w-72 drop-shadow-xl rounded-2xl"  src={Admin} alt="" />
                </SwiperSlide>
                <SwiperSlide className="w-80 p-2">
                    <img className="w-72 drop-shadow-xl rounded-2xl" src={Burguer} alt="" />
                </SwiperSlide>
                <SwiperSlide className="w-80 p-2">
                    <img className="w-72 drop-shadow-xl rounded-2xl"  src={Netflix} alt="" />
                </SwiperSlide>
                <SwiperSlide className="w-80 p-2">
                    <img className="w-72 drop-shadow-xl rounded-2xl" src={Movie} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;