import {get} from '../utils/api.service';

export const ProjetsApi = {
    getProjets:async()=>await get('/projet'),
    getProjectsTitle:async()=>await get('/projet/projectsTitle')
}