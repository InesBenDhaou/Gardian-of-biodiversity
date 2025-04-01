import {get} from '../utils/api.service';

export const BeBenifsApi = {
    getAllBebenificiers: async ()  => await get('/bebenificier')
}