import {get} from '../utils/api.service';

export const TeamMembersApi = {
    getTeamMembers:async()=>await get('/teamMember')
    
}