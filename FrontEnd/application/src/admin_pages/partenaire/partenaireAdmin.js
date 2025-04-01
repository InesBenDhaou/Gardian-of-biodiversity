import publicPartner from '../../images/partenaires/publicPartner.svg'
import associativePartner from '../../images/partenaires/associativePartner.svg';
import entreprisePartner from '../../images/partenaires/entreprisePartner.svg';

import PartenairesPublic from '../../pages/partenaires/partenaire_public/Partenaires_Public';
import PartenairesAssociative from '../../pages/partenaires/partenaire_association/partenaires-associative';
import PartenairesEntreprise from '../../pages/partenaires/partenaire_entreprise/Partenaires_Entreprise';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../../pages/partenaires/Partenaires.css';

import {
    MouseParallaxContainer
} from "../../libs/react-parallax-mouse/Container";
import {
    MouseParallaxChild
} from "../../libs/react-parallax-mouse/Child";
import React, { useState, useEffect } from 'react';
import Footer from '../../pages/footer/Footer';
import '../../pages/homepage/homepage.css'
import '../../pages/descoverAndProtection/View.css'
import PartenairesAdmin from './partenaires';
import NavbarAdmin from '../navigationBar/navbaradmin';
function PartenaireAdmin(){

    const [componentToShow, setComponentToShow] = useState(null);

    const handleClick = (component) => {
        setComponentToShow(component);
    };
 
    return(
        <div>
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
                        <div className={'partenaires_selectSection__itemContainer'} >
                            <object className={'homepage_selectSection__image'} data={publicPartner}  />
                            <p className='section__title' >Public Partners </p>
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
                        <div className={'partenaires_selectSection__itemContainer'}>
                            <object className={'homepage_selectSection__image'} data={entreprisePartner}/>
                            <p className='section__title'>entreprise Partners</p>
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
                        <div className={'homepage_selectSection_itemContainer'}>
                            <object className={'homepage_selectSection__image'} data={associativePartner}/>
                            <p className='section__title'>associative Partner</p>
                        </div>
                    </MouseParallaxChild>
                 
                    
                   
                </MouseParallaxContainer>
            </div>
            </div>
      
        <PartenairesAdmin/>
        <Footer />
        </div>
    );
}
export default PartenaireAdmin