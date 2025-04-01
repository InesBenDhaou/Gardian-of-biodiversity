import { Module } from '@nestjs/common';
import { TeamMemberService } from '../services/feed/teamMember.service';
import { TeamMemberController } from '../controllers/teamMember.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {TeamMemberEntity} from'../models/teamMember/teamMember.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([TeamMemberEntity ])
  ],
  providers: [TeamMemberService],
  controllers: [TeamMemberController]
})
export class TeamMemberModule {}
