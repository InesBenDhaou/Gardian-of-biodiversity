import { postLogOut } from '../../utils/api.service';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const handleLogout = async (navigate) => {
    try {
        await postLogOut('/user/logout');
        navigate('/homepage');
        console.log('jwt:', Cookies.get('jwt'));
    } catch (error) {
        console.error('Error logout user:', error);
    }
};

export default handleLogout;