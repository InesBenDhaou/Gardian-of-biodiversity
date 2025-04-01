import {get} from '../utils/api.service';

export const NewsApi = {
    getAllNews: async ()  => await get('/news')
}