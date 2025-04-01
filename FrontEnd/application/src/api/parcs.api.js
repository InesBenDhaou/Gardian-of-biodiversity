import {get} from '../utils/api.service';

export const ParcsApi = {
    getAllParcs: async ()  => await get('/parc')
}