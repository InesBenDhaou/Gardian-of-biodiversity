import React from 'react'
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './partenaires-associative.css';


const Partenaire = (props) => {
  

  return (
    
    <Container className='container-partenaire'>
      
        <img src={'data:image/png;base64,' +props.item.image} alt="project" />
        <div className="disc">
            <h1>{props.item.name}</h1>
            <p>{props.item.description}</p>
            <a href={props.item.link}>descover</a>
        </div>
    </Container>
  )
}

export default Partenaire;

const Container = styled.div`
  height: 20rem;
  background-color: #ffff;
  margin: 0 0.5rem;
  padding: 0rem;
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  overflow: hidden;


`;