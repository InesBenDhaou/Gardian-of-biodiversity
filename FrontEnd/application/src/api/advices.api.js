import {get} from '../utils/api.service';

export const AdvicesApi = {
    getAllAdvices: async ()  => await get('/advice')
}