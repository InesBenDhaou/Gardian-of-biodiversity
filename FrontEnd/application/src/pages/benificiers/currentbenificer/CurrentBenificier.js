import './CurrentBenificier.css';
import React from 'react';
import {  Pagination,  Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide  } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay' ;
import { CurrentBenifsApi } from '../../../api/currentBenif';


function Benificier ( ) {
   
    const [CurrentBenifs, setCurrentBenifs] = useState([]);

    useEffect(() => {
        CurrentBenifsApi.getAllCurrentBenifs().then((newCurrentBenifs) => {
            setCurrentBenifs(newCurrentBenifs);
        });
      }, []);
    

    return (
    <> 
    <div className='container_current_benificier'>
            <div className='container_current_benificier__background' />
    <Swiper className='SwiperBenificier'
        modules={[Pagination ,Autoplay]}
        centeredSlides={true}  
        centeredSlidesBounds={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
    {CurrentBenifs.map((slide) => (
        <div className='benificier__swiper__container'>
        <SwiperSlide key={slide.id}  >
            <div className='benificier_description'>
                <div className='benificier_img'>
                <img src={'data:image/png;base64,' +slide.image} />
                </div>
                <div className='benificier_infos'>
                    <h1 className='benificier_name' >{slide.name}</h1>
                    <h5>our benificier since :</h5>
                    <h3 className='benificier_date'>{slide.date}</h3>
                    <p className='benificier_about'>{slide.about}</p>
                </div>
            </div>
        </SwiperSlide> 
        </div>
    ))};
    </Swiper>
    </div>
   </> 
    );
}  




export default Benificier;