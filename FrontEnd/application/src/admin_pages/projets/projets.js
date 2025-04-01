import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../../pages/projets/Projets.css';

import ProjectTimelineAdmin from './projectTimeline/projectTimeline';
import EventAdmin from './events/events';

import ForthcomingEvents from '../../pages/projets/forthcomingEvents/forthcomingEvents';
import Acheivements from '../../pages/projets/achievement/Acheivements';
import Footer from '../../pages/footer/Footer';
import ProjectTimeline from '../../pages/projets/ProjectTimeline';

import forthcomingEvents from '../../images/projets/forthcomingEvent.svg';
import acheivelents from '../../images/projets/acheivements.svg';
import projects from '../../images/projets/projets.svg';
import '../../pages/homepage/homepage.css'
import '../../pages/descoverAndProtection/View.css'
import {
    MouseParallaxContainer
} from "../../libs/react-parallax-mouse/Container";
import {
    MouseParallaxChild
} from "../../libs/react-parallax-mouse/Child";
import NavbarAdmin from '../navigationBar/navbaradmin';
import ParticipantRequestAdmin from './participantsRequest/participantsRequest';
function ProjetsAdmin(){
 
    return(
        
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
            
           <ProjectTimelineAdmin/>
           <EventAdmin/>
           <ParticipantRequestAdmin/>
        <Footer/>
       </>
       
    );
}
export default ProjetsAdmin