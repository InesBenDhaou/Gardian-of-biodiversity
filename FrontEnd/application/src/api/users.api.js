import {getOne} from '../utils/api.service';
export const UsersApi = {
    
    /*getconnectedUser: async ()  => await getOne('/user/specificUser')*/
    getconnectedUser: async () => {
        try {
            return await getOne('/user/specificUser');
        } catch (error) {
            throw error; // Propagate the error for handling in the component
        }
    },
    
}