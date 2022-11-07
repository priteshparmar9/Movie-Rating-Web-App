import React from 'react';
import { useState, useEffect } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import { useRef } from 'react';
import 'swiper/css';
import './css/Slider.css';
import img1 from './images/transformers.jpg';
import img2 from './images/i2.jpg';
import img3 from './images/i3.jpg';



function Slider() {
   
    return(
       <>
         <div style={{ width:'100%', height: '100vh', overflow:'hidden'}}>
            <Swiper 
              centeredSlides={true}
                autoplay={{
                   Delay: 1500,
                   DisableOnInteraction:false
                }} 
                speed={2000}
                 modules={[Autoplay,Navigation,Pagination]}
             >
        
                <SwiperSlide>
                   <img classsName="carousel" src={img1} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                   <img classsName="carousel" src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                   <img classsName="carousel" src={img3} alt="" /> 
                </SwiperSlide>
            </Swiper>
         </div>
       </>
    );
}

export default Slider;