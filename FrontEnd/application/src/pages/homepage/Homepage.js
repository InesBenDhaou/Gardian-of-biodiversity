import charityImg from '../../images/parallax/charity.svg';
import protectionImg from '../../images/parallax/protection.svg';
import projectsImg from '../../images/parallax/projects.svg';
import partnersImg from '../../images/parallax/partners.svg';
import beneficiaryImg from '../../images/parallax/beneficiary.svg';
import login from '../../images/icons/login-svgrepo-com.svg';
import signin from '../../images/icons/registration-svgrepo-com.svg';
import logout from '../../images/icons/logout.svg';
import './homepage.css';
import Actus from '../news/Actus';
import Footer from '../footer/Footer';

import {
    MouseParallaxContainer
} from "../../libs/react-parallax-mouse/Container";
import {
    MouseParallaxChild
} from "../../libs/react-parallax-mouse/Child";
import {useNavigate} from "react-router-dom";
import ReclamationItem from '../latest_reports/ReclamationItem';
import { useAuthentication } from '../userauthentification';
import  { useUserType } from '../userauthentification';
import Cookies from 'js-cookie';
import { postLogOut } from '../../utils/api.service';
import handleLogout from './LogOut';

function Homepage() {

    const navigate = useNavigate();

    const isLoggedIn = useAuthentication();

    
    const handleClickLogIn = () => {
        navigate('/login')
    }
   
    const handleClickDecouverte = () => {
        navigate('/DecouverteEtProtection')
    }

    const handleClickSignUp = () => {
        navigate('/signup')
    }

    const handleClickBenificiers =() => {
        navigate('/Benificiers')
    }

    const handleClickPartenaires = () => {
        navigate('/Partenaires')
    }
    const handleClickProjets = () => {
        navigate('/Projets')
    }
    const handleClickAssociation = () => {
        navigate('/association')
    }

    const handleClickLogOut = async (e) => {
        e.preventDefault();
        try {
            await postLogOut('/user/logout');
            window.location.reload(); // Reload the page
            console.log('jwt:', Cookies.get('jwt'));
        } catch (error) {
            console.error('Error logout user:', error);
        }
    };

    return (<div role="main" >
        <section className={"homepage__section"}>
            <div className={'homepage__header'}>
                <h3 className={'homepage__header__subtitle'}>
                    Welcome to
                </h3>
                <h1 className='homepage__header__title'>
                    Gardian Of Biodiversity Association
                </h1>
                {isLoggedIn ? (
                    <div className={"homepage__user"}>
                        <button className="user_button_logout" onClick={handleClickLogOut}>
                            <img src={logout} className='svgIcon' />
                        </button>
                    </div>
                ) : (
                    <div className={"homepage__user"}>
                        <button className="user_button_login" onClick={handleClickLogIn}>
                            <img src={login} className='svgIcon' />
                        </button>
                        <button className="user_button_signup" onClick={handleClickSignUp} >
                            <img src={signin} className='svgIcon' />
                        </button>
                    </div>
                )}
            </div>


            <div className={'homepage__selectSection'}>
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
                        <div className={'homepage_selectSection__itemContainer'}>
                                <div className={'homepage_selectSection__image homepage_selectSection__image--charity'} onClick={handleClickAssociation}></div>
                                <p className='section__title' >Association</p>
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
                         <div className={'homepage_selectSection__itemContainer'}>
                               <div className={'homepage_selectSection__image homepage_selectSection__image--decouverte'} onClick={handleClickDecouverte}></div>
                                <p className='section__title' >Decouverte & Protection</p>
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
                        <div className={'homepage_selectSection__itemContainer'}>
                                <div className={'homepage_selectSection__image homepage_selectSection__image--partenaire'} onClick={handleClickPartenaires}></div>
                                <p className='section__title' >Partenaires</p>
                           
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
                        <div className={'homepage_selectSection__itemContainer'}>
                                <div className={'homepage_selectSection__image homepage_selectSection__image--benfi'} onClick={handleClickBenificiers}></div>
                                <p className='section__title' >beneficier</p>
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
                         <div className={'homepage_selectSection__itemContainer'}>
                         <div className={'homepage_selectSection__image homepage_selectSection__image--projet'} onClick={handleClickProjets}></div>
                                <p className='section__title' >Projets</p>
                          
                        </div>
                    </MouseParallaxChild>
                </MouseParallaxContainer>
            </div>
        </section>
        <Actus />
        <ReclamationItem />
        <Footer />
        
        


    </div>);
}

export default Homepage;
