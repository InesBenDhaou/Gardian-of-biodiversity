import {get} from '../utils/api.service';

export const PlantsApi = {
    getAllPlants: async ()  => await get('/plant')
}