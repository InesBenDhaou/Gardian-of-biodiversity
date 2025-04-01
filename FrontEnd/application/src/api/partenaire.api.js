import {get} from '../utils/api.service';

export const PartenairesApi = {
    getPartenaireAssociation:async()=>await get('/partenaire/association'),
    getPartenaireEntreprise:async()=>await get('/partenaire/entreprise'),
    getPartenairePublic:async()=>await get('/partenaire/public'),
    getAllPartenaire:async()=>await get('/partenaire'),

}