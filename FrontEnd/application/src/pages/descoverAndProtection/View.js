import React from "react";
import NavBar from "../navigationBar/NavBar";
import protectionImg from '../../images/icons/protection1.svg';
import discoveryImg from '../../images/icons/discover.svg';
import adviceImg from '../../images/icons/advices.svg';
import espaceRareImg from '../../images/icons/espaceRare.svg';

import {MouseParallaxContainer} from "../../libs/react-parallax-mouse/Container";
import {MouseParallaxChild} from "../../libs/react-parallax-mouse/Child";
import {useNavigate} from "react-router-dom";

import Parcs from './parcs/Parcs'
import Animals from "./animals/Animals"
import Plants from "./plants/Plants";
import Protection from "./protection/Protection"
import Footer from "../footer/Footer";
import Advice from "./advices/Advices";
import DonProt from "./donAndProt/DonProt";
import './View.css';


function View (){


    const navigate = useNavigate();

    const navigateToDiscovery = () => {
        navigate('/DecouverteEtProtection/Discovery')
    }
    const navigateToRareSpaces = () => {
        navigate('/DecouverteEtProtection/RareSpots')
    }
    const navigateToAdvices = () => {
        navigate('/DecouverteEtProtection/Advices')
    }
    const navigateToProtection = () => {
        navigate('/DecouverteEtProtection/Protection')
    }


    return (
        <>
        <div className="View">
            <NavBar/>
        <p className="slogon_view">Here, we explore amazing places and rare sopts and promise to keep them special</p>
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
                  <div className={'Descover_selectSection__itemContainer'} onClick={navigateToDiscovery}>
                      <object className={'Descover_selectSection__image'} data={discoveryImg}/>
                      <p className="section__title" onClick={navigateToDiscovery}>Discovery</p>
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
                      <object className={'Descover_selectSection__image'} data={protectionImg} onClick={navigateToProtection}/>
                      <p className="section__title" onClick={navigateToProtection}>Protection</p>
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
                      <object className={'Descover_selectSection__image'} data={adviceImg} onClick={navigateToAdvices}/>
                      <p className="section__title" onClick={navigateToAdvices}>Advices</p>
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
                      <object className={'Descover_selectSection__image'} data={espaceRareImg} onClick={navigateToRareSpaces}/>
                      <p className="section__title" onClick={navigateToProtection}>Rare Spaces</p>
                  </div>
              </MouseParallaxChild>
          </MouseParallaxContainer>
      </div>
      </div>
      <Parcs />
      <Animals />
      <Plants />
      <Protection />
       <DonProt/>
       <Advice />
       <Footer />
      </>
    )
}
export default View ;