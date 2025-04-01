import charityImg from '../../images/parallax/charity.svg';
import protectionImg from '../../images/parallax/protection.svg';
import projectsImg from '../../images/parallax/projects.svg';
import partnersImg from '../../images/parallax/partners.svg';
import beneficiaryImg from '../../images/parallax/beneficiary.svg';
import logout from '../../images/icons/logout.svg';
import '../../pages/homepage/homepage.css';
import { useEffect } from 'react';
import Cookies from 'js-cookie';


import {
    MouseParallaxContainer
} from "../../libs/react-parallax-mouse/Container";
import {
    MouseParallaxChild
} from "../../libs/react-parallax-mouse/Child";
import {useNavigate} from "react-router-dom";
import Newsadmin from './news/news';
import Reclamationadmin from './reclamations/reclamation';
import Footer from '../../pages/footer/Footer';
import { postLogOut } from '../../utils/api.service';


function Homepageadmin() {

    const navigate = useNavigate();
    useEffect(() => {
        const token = Cookies.get('jwt'); 
        
        if (token) {
          console.log('User is logged in');
        } else {
          console.log('User is not logged in');
        }
      }, []); 

    const handleClickHomepage = () => {
        navigate('/homepage')
    }

    const handleClickLogOut = async (e) => {
        e.preventDefault();
        try {
            const logOutUser = await postLogOut('/user/logout');
            handleClickHomepage();
            console.log('jwt:', Cookies.get('jwt'));
            }
        catch (error) {
            console.error('Error logout user:', error);
        }
    };


    const handleClickDecouverte = () => {
        console.log("Navigating to DecouverteEtProtectionAdmin");
        navigate('/DecouverteEtProtectionAdmin')
    }

   
    const handleClickBenificiers = () => {
        navigate('/BenificiersAdmin')
    }
    const handleClickParc = () => {
        navigate('/DecouverteEtProtectionAdmin')
    }

    const handleClickPartenairesAdmin =() => {
        navigate('/Partenairesadmin')
    }

    const handleClickProjetsAdmin =() => {
        navigate('/Projetsadmin')
    }
    const handleClickAssociationadmin = () => {
        navigate('/Associationadmin')
    }
    
    

    return (<div role="main" >
        <section className={"homepage__section"}>
            <div className={'homepage__header'}>
                <h3 className={'homepage__header__subtitle'}>
                    Welcome to
                </h3>
                <h1 className='homepage__header__title'>
                    Gardian Of Biodiversity Association
                </h1>
                <div className={"homepage__user"}>
                    <button className="user_button_logout" onClick={handleClickLogOut} >
                        <img src={logout} className='svgIcon' />
                    </button>
                </div>
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
                        <div className={'homepage_selectSection__itemContainer'} >
                        <div className={'homepage_selectSection__image homepage_selectSection__image--charity'} onClick={handleClickAssociationadmin}></div>
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
                        <div className={'homepage_selectSection_itemContainer'}>
                        <div className={'homepage_selectSection__image homepage_selectSection__image--decouverte'}  onClick={handleClickParc}></div>
                            <p className='section__title'>Decouverte & Protection</p>
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
                        <div className={'homepage_selectSection_itemContainer'}>
                        <div className={'homepage_selectSection__image homepage_selectSection__image--partenaire'} onClick={handleClickPartenairesAdmin}></div>
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
                        <div className={'homepage_selectSection_itemContainer'}>
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
                        <div className={'homepage_selectSection_itemContainer'}>
                        <div className={'homepage_selectSection__image homepage_selectSection__image--projet'} onClick={handleClickProjetsAdmin}></div>
                            <p className='section__title' >Projets</p>
                        </div>
                    </MouseParallaxChild>
                </MouseParallaxContainer>
            </div>
        </section>
        <Newsadmin />
        <Reclamationadmin />
        <Footer />
        
        


    </div>);
}

export default Homepageadmin;
