import {get} from '../utils/api.service';

export const PendingReportsApi = {
    getAllPendingRepports: async ()  => await get('/pendingreclamation')
}