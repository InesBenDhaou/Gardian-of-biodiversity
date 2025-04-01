import React, { useRef, useState,useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/autoplay";
import './Advices.css';
import { EffectCards ,Autoplay } from 'swiper/modules';
import { AdvicesApi } from '../../../api/advices.api';

export default function App() {
   
      const [Advices, setAdvices] = useState([]);

      useEffect(() => {
        AdvicesApi.getAllAdvices().then((newAdvices) => {
          setAdvices(newAdvices);
        });
      }, []);
  return (
    <section className='advices__container'>
    <div className='advices__container__background' />
         <h2 className="big__title"><span >Check this few Advices to help the envirement</span></h2>
      <Swiper
        effect={'cards'}
        autoplay={{ delay: 4000 }}
        grabCursor={true}
        modules={[EffectCards,Autoplay]}
        className="mySwiper"
      >
   {Advices.map((slide) => (
      <SwiperSlide key={slide.id} className='advice__slide' >
        
        <div className='contentContainer'>
            
            <p className='content_advice'>{slide.description}</p>
       </div> 
       <img src={'data:image/svg+xml;base64,'+slide.image} className='advice__bavkground' />
      </SwiperSlide>
   ))};
      </Swiper>
    </section>
  );
}
