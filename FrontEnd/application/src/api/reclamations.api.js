import {get} from '../utils/api.service';

export const ReclamationsApi = {
    getAllReclamations: async ()  => await get('/reclamation')
}