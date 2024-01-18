import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Admin from '../../img/admin.jpeg'
import Movie from '../../img/movie.jpeg'

const Portfolio = () => {
    return(
        <div className="flex flex-col items-center justify-center h-[70vh]">
            <span className="text-black font-bold text-4xl">My projects</span>


            <Swiper className="overflow-visible">
                <SwiperSlide className=" w-">
                    <img src={Admin} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Movie} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;