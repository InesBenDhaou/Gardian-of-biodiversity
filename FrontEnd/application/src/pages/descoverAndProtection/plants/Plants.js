import React, { useRef, useState , useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./Plants.css";
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import {PlantsApi} from "../../../api/plants.api" ;

export default function Plants() {

      const [Plants, setPlants] = useState([]);
      useEffect(() => {
        PlantsApi.getAllPlants().then((newPlants) => {
          setPlants(newPlants);
        });
      }, []);

  return (
    <section className='plant__container'>
          <div className='plant__container__background' />
          <h2 className="big__title">Also some rare <span >Plants</span></h2>

      <Swiper className='swiper_plants'
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination ,Autoplay]}
        autoplay={{ delay: 5000 }}
        
      >
         {Plants.map((slide) => (
      <SwiperSlide key={slide.id} className="swiper__plant__slide" >
         <div className="slide__plant__content">
           <img src={'data:image/png;base64,' + slide.image} className="plant-img" />
            <div className="slide-plant-body">
               <h1 className="plant-name">{slide.title}</h1>
               <p className="plant-info">{slide.description}</p>
            </div>
          </div>
      </SwiperSlide>
    ))};
    </Swiper>
       
    </section>
  );
}
