import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide  } from 'swiper/react';
import './previous.css'
import {Autoplay , Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay' ;
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import { PreviousBenifsApi } from '../../../api/previousBenif';

function Previous() {
    
    const [PreviousBenifs, setPreviousBenifs] = useState([]);

      useEffect(() => {
          PreviousBenifsApi.getAllPreviousbenificiers().then((newPreviousBenifs) => {
            setPreviousBenifs(newPreviousBenifs);
          });
        }, []);

  return (
    <section className='previous__container'>
          <div className='previous__container__background' />
          <h2 className="big__title">Check our <span >Previous</span> Benificiers</h2>
       

      <Swiper className="SwiperPreviousBenificier"
        
       
        modules={[Scrollbar ,Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        scrollbar={{ clickable: true }}
        autoplay={{ delay: 4000 }}

        
      >
    {PreviousBenifs.map((slide) => (
      <SwiperSlide key={slide.id}  >
         <div className="slide__PreviousBenificier__content">
            <div className="previous__benificier__info">
               <h1 className="previous__benificier__name">{slide.name}</h1>
               <h5>our benificier during :</h5>
               <h2 className='duration'>{slide.duration}</h2>
               <p className="previous__benificier__description">{slide.about}</p>
            </div>
            <div className='previous__benificier__card'>
                <img className='previous__benificier__img' src ={'data:image/png;base64,' +slide.image}></img>
            </div>
          </div>
      </SwiperSlide>
    ))};
      </Swiper>
    </section>
  );
}

export default Previous ;