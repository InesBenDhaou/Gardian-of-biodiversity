import {get} from '../utils/api.service';

export const AnimalsApi = {
    getAllAnimals: async ()  => await get('/animal')
}