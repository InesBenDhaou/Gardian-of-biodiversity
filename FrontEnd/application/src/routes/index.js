import {Navigate, Outlet, useRoutes} from "react-router-dom";
import LogIn from "../pages/homepage/LogIn/LogIn";
import View from "../pages/descoverAndProtection/View"; 
import Newsdetails from "../pages/news/newsDetails/Newsdetails"
import Signup from "../pages/homepage/Signup/Signup";
import Parcs from "../pages/descoverAndProtection/parcs/Parcs";
import Advices from "../pages/descoverAndProtection/advices/Advices";
import Benificiers from "../pages/benificiers/Benificiers";
import {lazy} from "react";
import Projets from "../pages/projets/Projets";
import PartenairesPage from "../pages/partenaires/Partenaires";
import JoinUs from "../pages/projets/forthcomingEvents/JoinUs";
import Homepageadmin  from "../admin_pages/Homepages/homepage";
import DecouverteAdmin from "../admin_pages/descouveryandprotection/decouverteandprotection";
import Benificieradmin from "../admin_pages/benificiers/benificieradmin";
import Association from "../pages/association/Association";
import PartenaireAdmin from "../admin_pages/partenaire/partenaireAdmin";
import ProjetsAdmin from "../admin_pages/projets/projets";
import Associationadmin from "../admin_pages/association/Association";

export default function Router() {
    return useRoutes([
        {
            path: 'homepage',
            element: <Homepage />,
        },
        {
            path: 'Homepageadmin',
            element: <Homepageadmin />,
        },
        {
            path: 'login',
            element: <LogIn />,
        },
        {
            path: 'DecouverteEtProtection',
            element: <View />,
        },
        {
            path: '/DecouverteEtProtectionAdmin',
            element: <DecouverteAdmin />,
        },
        {
            path: 'DecouverteEtProtection/Discovery',
            element: <Parcs />,
        },
    
        {
            path: 'DecouverteEtProtection/Advices',
            element: <Advices />,
        },
        {
            path: 'newsdetail',
            element : <Newsdetails />
        },
        {
            path: 'signup',
            element : <Signup />
        },
        {
            path: 'Benificiers',
            element: <Benificiers />,
        },
        {
            path: '/BenificiersAdmin',
            element: <Benificieradmin />,
            
        },
        {
            path:'/Partenaires',
            element:<PartenairesPage/>
        },
        {   path:'/Partenairesadmin',
            element: <PartenaireAdmin /> 
        },
        {
            path:'/Projets',
            element:<Projets/>
        },
        {
            path:'/Projetsadmin',
            element:<ProjetsAdmin/>
        },
        {
            path: '/association',
            element: <Association/>
            
        },
        {
            path: '/Associationadmin',
            element: <Associationadmin/>
            
        },
        {
            path: '/',
            element: <Navigate to="/homepage" replace/>
        },
    ])
}


const Homepage = lazy(() => import('../pages/homepage/Homepage'));