import "./association.css"
import React from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import Strategie from './Strategie';
import charityImg from '../../images/parallax/charity.svg';
import protectionImg from '../../images/parallax/protection.svg';
import historiqueImg from '../../images/association/historique.svg';
import equipeImg from  '../../images/association/equipe.svg';
import planStrategiqueImg from '../../images/association/planStrat.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer  from "../footer/Footer.js";
import Navbar from '../navigationBar/NavBar';
import TeamSection from "./TeamSection";
import { useEffect , useState} from "react";
import {
    MouseParallaxContainer
} from "../../libs/react-parallax-mouse/Container";
import {
    MouseParallaxChild
} from "../../libs/react-parallax-mouse/Child";

function Association(){

    const [isVisible, setIsVisible] = useState(false);

    const onVisibilityChange = (isVisible) => {
        if (isVisible) {
        setIsVisible(true);
        }
    };
        
            useEffect(() => {
            AOS.init();
            }, []);

    return(
        <>
        <div className="View">
        <Navbar/>   
        <div className="hero-container" data-aos="fade-up">
        <p className="slogon_view">Nurturing Nature, Sustaining Life.</p>
        </div> 
               
          
                <div className={'association_selectSection'}>
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
                        className={'association_selectSection__background'}
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
                         <div className={'association_selectSection__itemContainer'} >
                            <object className={'association_selectSection__image'} data={charityImg}  />
                            <p  className='section__title'>Statut </p>
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
                        <div className={'association_selectSection__itemContainer'}>
                            <object className={'association_selectSection__image'} data={protectionImg}/>
                            <p className='section__title'>Gouvernance</p>
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
                        <div className={'association_selectSection__itemContainer'}>
                            <object className={'association_selectSection__image'} data={historiqueImg}/>
                            <p className='section__title'>Historique</p>
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
                        <div className={'association_selectSection__itemContainer'}>
                            <object className={'association_selectSection__image'} data={planStrategiqueImg }/>
                            <p className='section__title'>Plan stratégique</p>
                        </div>
                        </MouseParallaxChild>
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
                        <div className={'association_selectSection__itemContainer'}>
                            <object className={'association_selectSection__image'} data={equipeImg}/>
                            <p  className='section__title'>équipe</p>
                        </div>
                        </MouseParallaxChild>
                    </MouseParallaxContainer>
                </div>
                
            </div> 
           
       

        <div className="historique">
            <section id="cta" class="cta">
                <div className="container" data-aos="zoom-in">

                    <div className="text-center">
                    <h3>Gardians of biodiversity</h3>
                    <p> Since its foundation in 2002, our association has been passionately committed to the preservation of rare species. Our organization draws strength from the belief that every creature, big or small, plays a crucial role in the delicate balance of our planet. Through innovative projects, educational campaigns, and strategic partnerships, we work diligently to raise awareness, protect, and restore the habitats of endangered species. We take pride in the achievements we have made so far.</p>
                    </div>
                </div>
            </section>

            <section id="counts" className="counts section-bg">
                <div className="container">
                <div className="row no-gutters">
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                <i className="bi bi-tencent-qq countIcons"></i>
                    <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                    <CountUp start={0} end={isVisible ? 232 : 0} duration={5} />
                    </VisibilitySensor>
                    <p><strong>Animals</strong> has rescued</p>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                    <i className="bi bi-journal-richtext"></i>
                    <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                    <CountUp start={0} end={isVisible ? 50 : 0} duration={5} />
                    </VisibilitySensor>
                    <p><strong>Projects</strong> has achieved</p>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                    <i className="bi bi-tree-fill"></i>
                    <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                    <CountUp start={0} end={isVisible ? 232 : 0} duration={5} />
                    </VisibilitySensor>
                    <p><strong>plants</strong> are saved</p>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                    <i className="bi bi-people"></i>
                    <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                    <CountUp start={0} end={isVisible ? 232 : 0} duration={5} />
                    </VisibilitySensor>
                <p><strong>Participants</strong> </p>
                </div>
                </div>
                </div>
                </div>
            </section>
            
        </div>
        <div className="container-fluid">
            <Strategie/>
        </div>

        <div className="container" style={{
                display: 'flex', // or use display: 'grid'
                flexWrap: 'wrap', // Allow items to wrap to the next line if there's not enough space
                justifyContent: 'space-around', // Adjust as needed
                alignItems: 'stretch', // Stretch items to fill the container vertically
                minHeight: '400px', // Set a minimum height for the section
                }}>
            <TeamSection/>
        </div>
        
    <Footer/>
    </>

    
    );
}
export default Association