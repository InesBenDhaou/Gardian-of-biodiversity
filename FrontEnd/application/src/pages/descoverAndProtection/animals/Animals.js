import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide  } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Animals.css'

import { EffectCube, Pagination ,Autoplay ,EffectCoverflow, } from 'swiper/modules';

import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import { AnimalsApi } from '../../../api/animals.api';

function Animals() {
    
    const [Animals, setAnimals] = useState([]);

    useEffect(() => {
      AnimalsApi.getAllAnimals().then((newAnimals) => {
        setAnimals(newAnimals);
      });
    }, []);

    
  return (
    <section className='animal__container'>
          <div className='animal__container__background' />
          <h2 className="big__title">Some rare <span >Animals</span>   you can find there  </h2>
       

      <Swiper className="SwiperAnimals"
        
       
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{ delay: 4000 }}
        pagination={true}
        modules={[EffectCube, Pagination ,Autoplay]}
        
      >
    {Animals.map((slide) => (
      <SwiperSlide key={slide.id} className="swiper__animal__slide" >
         <div className="slide__animal__content">
           <img src={'data:image/png;base64,' + slide.image} className="animal-img" />
            <div className="slide-body">
               <h1 className="animal-name">{slide.title}</h1>
               <p className="animal-info">{slide.description}</p>
            </div>
          </div>
      </SwiperSlide>
    ))};
      </Swiper>
    </section>
  );
}

export default Animals ;