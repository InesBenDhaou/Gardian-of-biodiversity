import React, { useRef } from 'react'
import Slider from 'react-slick';
import{ useEffect,  useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Partenaire from './partenaire.jsx';
import { PartenairesApi } from '../../../api/partenaire.api';



var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const PartenaireSlide = () => {

  const [partenairesAssociation, setpartenairesAssociation] = useState([]);

    useEffect(() => {
      PartenairesApi.getPartenaireAssociation().then((newPartenaire)=>{
        setpartenairesAssociation(newPartenaire);
      });
      
      
    }, []);
  
  const arrowRef = useRef(null);
    let sliderProject = "";
    
    sliderProject = partenairesAssociation.map((item, i) => {
      console.log("Item:", item);
      return (
          <Partenaire item={item} key={i}/>
          
      );
  });
    
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default PartenaireSlide;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`