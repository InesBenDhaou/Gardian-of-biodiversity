import {get} from '../utils/api.service';

export const EventsApi = {
    getForthcomingEvents:async()=>await get('/event/forthcoming'),
    getAcheivements:async()=>await get('/event/achievements'),
    getAllEvents:async()=>await get('/event'),
    
}