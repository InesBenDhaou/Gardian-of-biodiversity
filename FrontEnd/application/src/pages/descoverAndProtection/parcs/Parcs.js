import './Parcs.css' ;
import React, { useState, useEffect } from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide  } from 'swiper/react';
import { ParcsApi } from '../../../api/parcs.api';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay' ;



function Parc () {
  
  const [Parcs, setParcs] = useState([]);

    useEffect(() => {
      ParcsApi.getAllParcs().then((newParcs) => {
        setParcs(newParcs);
      });
    }, []);

    return (
    <section id="events" className="events">
      
      <div className='events__background' />
        <div className="section-title">
          <h2>Put this <span >Parcs </span>in your must visit</h2>
        </div>
        
  
     

 
    <div>
        
    <Swiper className="swiper__parc__container"
      modules={[Pagination ,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
    >
    {Parcs.map((slide) => (
      <SwiperSlide key={slide.id} className="swiper_parc_slide" >
         <div className="slide_parc_content">
         <img src = {'data:image/png;base64,'+slide.image} className="imgparc" ></img>
            <div className='parcInfo'>
              <h1 className="parc__name">{slide.title}</h1>
              <p className="description">{slide.description}</p>
            </div>
            
          </div>
        

      </SwiperSlide>
    ))};
    </Swiper>
    </div>

       






       
       </section>


    );
}
export default Parc ;