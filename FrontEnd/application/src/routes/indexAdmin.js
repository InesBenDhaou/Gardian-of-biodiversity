import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";
import DecouverteAdmin from "../admin_pages/descouveryandprotection/decouverteandprotection";
import Benificieradmin from "../admin_pages/benificiers/benificieradmin";


const Homepageadmin = lazy(() => import('../admin_pages/Homepages/homepage'));

export default function RouterAdmin() {
    return useRoutes([
        {
            path: 'Homepageadmin',
            element: <Homepageadmin />,
        },
        {
            path: '/DecouverteEtProtectionAdmin',
            element: <DecouverteAdmin />,
        },
        {
            path: '/BenificiersAdmin',
            element: <Benificieradmin />,
            
        },
        {
            path: '/',
            element: <Navigate to="/Homepageadmin" replace/>
        },
    ]);
}
