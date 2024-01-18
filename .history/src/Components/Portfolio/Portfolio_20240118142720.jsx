import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Admin from '../../img/admin.jpeg'
import Movie from './../../img/movie.jpeg'

const Portfolio = () => {
    return(
        <div>
            <span>My projects</span>


            <Swiper>
                <SwiperSlide>
                    <img src={Admin} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Admin} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;