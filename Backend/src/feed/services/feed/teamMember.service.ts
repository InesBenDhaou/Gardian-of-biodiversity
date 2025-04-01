import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import {from , Observable } from 'rxjs';
import {TeamMemberEntity} from '../../models/teamMember/teamMember.entity';
import {TeamMemberInterface} from '../../models/teamMember/teamMember.interface';

export class TeamMemberService {
    constructor (
        @InjectRepository(TeamMemberEntity)
        private readonly teamMemberRepository : Repository<TeamMemberEntity>
    ){}

    

    createTeamMember(teamMemberInterface : TeamMemberInterface) : Observable<TeamMemberInterface> {
        return from(this.teamMemberRepository.save(teamMemberInterface));
    }

    async findAllTeamMembers(): Promise<TeamMemberInterface[]> {
        const teamMembers = await this.teamMemberRepository.find();

        return teamMembers.map(teamMember => {
            return {
                id:teamMember.id,
                name : teamMember.name,
                position:teamMember.position,
                twitterLink:teamMember.twitterLink,
                facebookLink:teamMember.facebookLink,
                instagramLink:teamMember.instagramLink,
                linkedinLink:teamMember.linkedinLink,
                image: teamMember.image as string,
                imageHex: null
                
            } as TeamMemberInterface
        }
        )
    }

    

    updateTeamMember (id:number ,teamMemberInterface : TeamMemberInterface): Observable<UpdateResult> {
        return from(this.teamMemberRepository.update(id,teamMemberInterface));

    }

    deleteTeamMember (id:number) : Observable<DeleteResult>{
        return from(this.teamMemberRepository.delete(id));
    }
}