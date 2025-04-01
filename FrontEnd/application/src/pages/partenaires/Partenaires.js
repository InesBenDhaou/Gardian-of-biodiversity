import publicPartner from '../../images/partenaires/publicPartner.svg'
import associativePartner from '../../images/partenaires/associativePartner.svg';
import entreprisePartner from '../../images/partenaires/entreprisePartner.svg';

import PartenairesPublic from '../partenaires/partenaire_public/Partenaires_Public';
import PartenairesAssociative from '../partenaires/partenaire_association/partenaires-associative';
import PartenairesEntreprise from '../partenaires/partenaire_entreprise/Partenaires_Entreprise';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Partenaires.css';

import {
    MouseParallaxContainer
} from "../../libs/react-parallax-mouse/Container";
import {
    MouseParallaxChild
} from "../../libs/react-parallax-mouse/Child";

import Navbar from '../navigationBar/NavBar';
import Footer from '../footer/Footer';
import '../homepage/homepage.css'
import '../descoverAndProtection/View.css'
function PartenairesPage(){
 
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
        <div className="partenaires_section" >
                <h1 id='partenaires_section_h1'>Our Partners</h1>
                <h2 id="partenaires_section_h2">Harmony in Conservation: Uniting Hands, Saving Species.</h2>
        </div>
       
        <div className="container">       
        <p className='intro_partenaires'>At <strong>Gardients of Biodiversity,</strong> we understand that the preservation of our planet's rich ecosystems requires collaborative efforts. We take deliberate action by forging meaningful partnerships to maximize our conservation impact. Together with our dedicated partners, we strive to influence key target audiences, advocating for the responsible trade in wild species and supporting the communities that depend on them. Our commitment to biodiversity goes hand-in-hand with the collective strength of our partners, and together, we work tirelessly to safeguard the delicate balance of our natural world.</p>
        </div>
       <div id='partenaires_public'>
            <PartenairesPublic/>
        </div>
        <div id="partenaires_associative">
            <PartenairesAssociative/>
        </div>
        <div id="partenaires_entreprise">
            <PartenairesEntreprise/>
        </div>
        <Footer />
        </>
    );
}
export default PartenairesPage