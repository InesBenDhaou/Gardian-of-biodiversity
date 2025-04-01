import {get} from '../utils/api.service';

export const CurrentBenifsApi = {
    getAllCurrentBenifs: async ()  => await get('/currentbenificier')
}