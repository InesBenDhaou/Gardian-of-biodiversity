import {get} from '../utils/api.service';

export const ParticipationApi = {
    getParticipants: async ()  => await get('/participant')
    
}