import React from 'react';
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import { useRef } from 'react';
import 'swiper/css';
import './css/Slider.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import { Link } from 'react-router-dom';



function Slider() {

   return (
      <>
         <div className="container" style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
            <Swiper
               centeredSlides={true}
               autoplay={{
                  Delay: 1500,
                  DisableOnInteraction: false
               }}
               speed={2000}
               modules={[Autoplay, Navigation, Pagination]}
            >

               <SwiperSlide>
                  <h1>
                     <img classsName="carousel" style={{
                        alignContent: "center"
                     }} src={img1} alt="" />
                     <Link to="movie/6369492c41b268922e5d7213" style={{
                        color: "white",
                        marginLeft: "2rem"
                     }}>
                        Harry Potter and Philosopher's Stone
                     </Link>
                  </h1>

               </SwiperSlide>
               <SwiperSlide>
                  <h1>
                  <img classsName="carousel" src={img2} alt="" />
                  <Link to="movie/63730f696abc4fcd637fac01" style={{
                        color: "white",
                        marginLeft: "2rem"
                     }}>
                     Harry Potter and Deathly Hollow Part 2
                     </Link>
                  </h1>
               </SwiperSlide>
               <SwiperSlide>
                  <h1>
                     <div className='container'>

                        <img classsName="carousel" src={img3} alt="" />
                        <Link to="movie/636e0e0b9ca9f8595b3da817" style={{
                           color: "white",
                           marginLeft: "2rem"
                        }}>
                           Titanic
                        </Link>
                     </div>
                  </h1>
               </SwiperSlide>
            </Swiper>
         </div>
      </>
   );
}

export default Slider;