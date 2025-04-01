import 'bootstrap/dist/css/bootstrap.min.css';
import './partenaires-associative.css';
import React from 'react';
import styled from 'styled-components';
import PartenaireSlide from './PartenaireSlide';
import { Zoom } from 'react-awesome-reveal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




function PartenairesAssociative() {
  return (
    <div className='container-fluid'>
      <div className="container-partenaire-entreprise">
      
      <Container id='project'>
        <Zoom>
          <h1 className='partneaires_type'>Our associative partners</h1>
          <h3 className='partenaires_intro'>
          Embark on a journey of shared purpose and impactful collaboration as we introduce our dedicated Associative Partners. United by shared values and a collaborative spirit, we proudly join hands with local nonprofits, community organizations, and international alliances. At the heart of our conservation efforts is the belief in the power of collective work. Together where passion meets purpose, and together, we contribute to a sustainable and harmonious world.
          </h3>
        </Zoom>
        <Slide>
            <PartenaireSlide/>
        </Slide>
    </Container>
    </div>
    </div>
  );
}

export default PartenairesAssociative;



const Container = styled.div`
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div`
width:1200px

`