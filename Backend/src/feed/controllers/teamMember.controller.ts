
import {TeamMemberService } from '../services/feed/teamMember.service';
import {from , Observable } from 'rxjs';
import { UpdateResult , DeleteResult } from 'typeorm';
import {TeamMemberInterface} from '../models/teamMember/teamMember.interface';
import { Body, Controller, Delete, Get, Param, Post ,Put ,UseInterceptors,UploadedFile} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import { TeamMemberEntity } from '../models/teamMember/teamMember.entity';

@Controller('teamMember')
export class TeamMemberController {
    constructor ( private teamMemberService:TeamMemberService ){

    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
      @UploadedFile() file: any,
      @Body() body: TeamMemberInterface
    ) {
      const teamMember = new TeamMemberEntity();
      teamMember.name=body.name;
      teamMember.position=body.position;
      teamMember.twitterLink=body.twitterLink;
      teamMember.facebookLink=body.facebookLink;
      teamMember.instagramLink=body.instagramLink;
      teamMember.linkedinLink=body.linkedinLink;
      
      teamMember.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.teamMemberService.createTeamMember(teamMember);
    }

    @Get()
    async findAll() : Promise<TeamMemberInterface[]> {
        return await this.teamMemberService.findAllTeamMembers();
    }


    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async update(
      @UploadedFile() file: any,
      @Param('id') id:number ,
      @Body() body: TeamMemberInterface
    ) {
      const teamMember = new TeamMemberEntity();
      teamMember.name = body.name;
      teamMember.facebookLink = body.facebookLink;
      teamMember.instagramLink = body.instagramLink;
      teamMember.linkedinLink = body.linkedinLink;
      teamMember.position = body.position;
      teamMember.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.teamMemberService.updateTeamMember(id,teamMember);
    }

    @Delete(':id')
    delete(@Param('id') id:number): Observable<DeleteResult>{
        return this.teamMemberService.deleteTeamMember(id);
    }

   
}
