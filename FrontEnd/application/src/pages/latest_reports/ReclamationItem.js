import {React,useEffect,useState} from "react";
import { Swiper, SwiperSlide  } from 'swiper/react';
import './reclamation.css'
import {Autoplay , Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay' ;
import { ReclamationsApi } from "../../api/reclamations.api";


 function ReclamationItem () {

  const [Reclamations, setReclamations] = useState([]);

    useEffect(() => {
      ReclamationsApi.getAllReclamations().then((newReclamations) => {
        setReclamations(newReclamations);
      });
    }, []);

  return (
    <div className="reports_container">
        <h1 className="section_reports_title">Check out these latest reports !</h1>
    <Swiper className="swiper_reports_container"
      modules={[Scrollbar ,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      scrollbar={{ clickable: true }}
      autoplay={{ delay: 5000 }}
    >
    {Reclamations.map((slide) => (
      <SwiperSlide key={slide.id} className="swiper-slide" >
         <div className="slide-content">
            <img src={'data:image/png;base64,' +slide.image} alt="" className="slide-image" />
            <div className="slide-description">
                <p className="opinion">{slide.opinion}</p>
                <p className="author">{slide.author}</p>
            </div>
          </div>
        

      </SwiperSlide>
    ))};
    </Swiper>
    </div>
  );
};
export default ReclamationItem ;