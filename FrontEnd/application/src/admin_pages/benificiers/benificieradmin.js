import React from "react";
import NavBar from "../navigationBar/navbaradmin";

import {MouseParallaxContainer} from "../../libs/react-parallax-mouse/Container";
import {MouseParallaxChild} from "../../libs/react-parallax-mouse/Child";
import benif from "../../images/benificier/donation-svgrepo-com (1).svg";
import oldbenif from "../../images/benificier/olive-svgrepo-com.svg";
import bebenif from "../../images/benificier/charity-svgrepo-com.svg";

import '../../pages/benificiers/Benificiers.css';
import Footer from "../../pages/footer/Footer";
import CurrentAdmin from "./currentBenificiers/current.js";
import PreviousAdmin from "./previousBenificiers/previous.js";
import BebenificierAdmin from "./beBenificiers/bebenificier.js";
import NavbarAdmin from "../navigationBar/navbaradmin";

function Benificieradmin (){


    return (
        <>
        <div className="View">
            <NavbarAdmin/>
       
          <div className={'homepage_selectSection'}>
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
                  className={'homepage_selectSection__background'}
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
                  <div className={'benificiers_selectSection__itemContainer'} >
                      <object className={'homepage_selectSection__image'} data={benif}/>
                      <p className="section__title" >Current Benificier</p>
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
                  <div className={'benificiers_selectSection__itemContainer'}>
                      <object className={'homepage_selectSection__image'} data={oldbenif} />
                      <p className="section__title">Previous Benificier</p>
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
                  <div className={'benificiers_selectSection__itemContainer'}>
                      <object className={'homepage_selectSection__image'} data={bebenif} />
                      <p className="section__title">Be Benificier</p>
                  </div>
              </MouseParallaxChild>
          </MouseParallaxContainer>
      </div>
      </div>
      <CurrentAdmin />
      <PreviousAdmin />
      <BebenificierAdmin/>
      <Footer />
     
      </>
    )
}
export default Benificieradmin ;