import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Projets.css';
import{ useEffect, useRef, useState } from 'react';
import ForthcomingEvents from './forthcomingEvents/forthcomingEvents';
import Acheivements from './achievement/Acheivements';
import Footer from '../footer/Footer';
import ProjectTimeline from './ProjectTimeline';
import Navbar from '../navigationBar/NavBar';

import forthcomingEvents from '../../images/projets/forthcomingEvent.svg';
import acheivelents from '../../images/projets/acheivements.svg';
import projects from '../../images/projets/projets.svg';
import '../homepage/homepage.css'
import '../descoverAndProtection/View.css'
import {
    MouseParallaxContainer
} from "../../libs/react-parallax-mouse/Container";
import {
    MouseParallaxChild
} from "../../libs/react-parallax-mouse/Child";
import JoinUs from './forthcomingEvents/JoinUs';
function Projets(){
    const [showJoinUsModal, setShowJoinUsModal] = useState(false);

    const handleJoinUsClick = () => {
      setShowJoinUsModal(true);
    };
  
    const handleCloseModal = () => {
      setShowJoinUsModal(false);
    };
  
 
    return(
        
        <>
        <div className="View">
        
            <Navbar/>   
            <p className="slogon_view">Here, we explore amazing places and rare sopts and promise to keep them special</p>
       
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
                            <div className={'projet_selectSection__itemContainer'} >
                                <object className={'homepage_selectSection__image'} data={projects}  />
                                <p  className='section__title' >projects </p>
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
                            <div className={'projet_selectSection__itemContainer'}>
                                <object className={'homepage_selectSection__image'} data={forthcomingEvents}/>
                                <p  className='section__title'>forthcoming events</p>
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
                            <div className={'projet_selectSection__itemContainer'}>
                                <object className={'homepage_selectSection__image'} data={acheivelents}/>
                                <p  className='section__title'>acheivements</p>
                            </div>
                        </MouseParallaxChild>
                     
                        
                       
                    </MouseParallaxContainer>
                </div>
            </div>
            
            <div className="projets_section" id="projets_section_div">
                <h1 id='projets_section_h1'>Our projects</h1>
                <h2 id="projets_section_h2">Together, we can protect and restore species and their habitats.</h2>
            </div>
            <ProjectTimeline/>
            <div className="forthcoming_events" id="forthcoming_events_div">
                <h1 id='forthcoming_events_h1'>Our forthcoming events</h1>
            </div>
            <ForthcomingEvents onJoinUsClick={handleJoinUsClick}/>
            {showJoinUsModal && <JoinUs onCloseModal={handleCloseModal} />}
            <div className="achievements" id="acheivements_div">
                <h1 id='achievements_h1'>achievements and impacts</h1>
            </div>
            <Acheivements/>
        <Footer/>
       </>
       
    );
}
export default Projets