import {get} from '../utils/api.service';

export const PreviousBenifsApi = {
    getAllPreviousbenificiers: async ()  => await get('/previousbenificier')
}