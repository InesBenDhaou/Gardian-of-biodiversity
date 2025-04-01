import React from "react";
import protectionImg from "../../images/icons/protection1.svg"
import discoveryImg from '../../images/icons/discover.svg';
import adviceImg from '../../images/icons/advices.svg';
import espaceRareImg from '../../images/icons/espaceRare.svg';

import {MouseParallaxContainer} from "../../libs/react-parallax-mouse/Container";
import {MouseParallaxChild} from "../../libs/react-parallax-mouse/Child";
import {useNavigate} from "react-router-dom";


import Footer from "../../pages/footer/Footer";

import '../../pages/descoverAndProtection/View.css';
import ParcAdmin from './parcs/parc';
import AnimalAdmin from "./animals/animal";
import PlantAdmin from "./plants/plants";
import AdviceAdmin from "./advices/advice";
import Forms from "./forms/forms";
import NavbarAdmin from "../navigationBar/navbaradmin";


function DecouverteAdmin (){

   

    return (
        <div>
                   <div className="View">
            <NavbarAdmin/>
        
          <div className={'Descover_selectSection'}>
          <MouseParallaxContainer
              className="parallax"
              containerStyle={{
                  width: "100%", display: "grid", gridTemplateColumns: "auto auto auto auto auto"
              }}
              globalFactorX={0.3}
              globalFactorY={0.3}
              resetOnLeave
          >
              <MouseParallaxChild
                  factorX={0.6}
                  factorY={0.1}
                  className={'Descover_selectSection__background'}
                  style={{
                      backgroundPositionY: "50%",
                      transform: "scale(1.2)",
                      position: "absolute",
                      filter: "brightness(35%)",
                      backgroundSize: "auto",
                      backgroundRepeat: "repeat",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden"
                  }}
              />
              <MouseParallaxChild
                  factorX={0.5}
                  factorY={0.5}
                  style={{
                      filter: "invert(1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "auto",
                      height: "100%"
                  }}
              >
                  <div className={'Descover_selectSection__itemContainer'} >
                      <object className={'Descover_selectSection__image'} data={discoveryImg}/>
                      <p className="section__title" >Discovery</p>
                  </div>
              </MouseParallaxChild>
              <MouseParallaxChild
                  factorX={0.7}
                  factorY={0.5}
                  style={{
                      filter: "invert(1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "auto",
                      height: "100%"
                  }}
              >
                  <div className={'Descover_selectSection__itemContainer'}>
                      <object className={'Descover_selectSection__image'} data={protectionImg} />
                      <p className="section__title" >Protection</p>
                  </div>
              </MouseParallaxChild>
              <MouseParallaxChild
                  factorX={0.9}
                  factorY={0.5}
                  style={{
                      filter: "invert(1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "auto",
                      height: "100%"
                  }}
              >
                  <div className={'Descover_selectSection__itemContainer'}>
                      <object className={'Descover_selectSection__image'} data={adviceImg} />
                      <p className="section__title">Advices</p>
                  </div>
              </MouseParallaxChild>
              <MouseParallaxChild
                  factorX={0.7}
                  factorY={0.5}
                  style={{
                      filter: "invert(1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "auto",
                      height: "100%"
                  }}
              >
                  <div className={'Descover_selectSection__itemContainer'}>
                      <object className={'Descover_selectSection__image'} data={espaceRareImg} />
                      <p className="section__title" >Rare Spaces</p>
                  </div>
              </MouseParallaxChild>
          </MouseParallaxContainer>
      </div>
      </div>
      <ParcAdmin />
      <AnimalAdmin />
      <PlantAdmin />
      <Forms />
      <AdviceAdmin />
      <Footer />
      </div>
    )
}
export default DecouverteAdmin ;