import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export const useAuthentication = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const jwtToken = Cookies.get('jwt');
        console.log('d5al : ',jwtToken);
        if (jwtToken) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    return isLoggedIn;
};

export const useUserType = () => {
    const [userType, setUserType] = useState(null);

    useEffect(() => {
        const userTypeCookie = Cookies.get('userType');
        if (userTypeCookie) {
            setUserType(userTypeCookie);
        } else {
            setUserType(null);
        }
    }, []);

    return userType;
};