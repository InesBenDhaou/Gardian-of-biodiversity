import { Module } from '@nestjs/common';
import { ParticipantEntity } from '../models/participant/participant.entity';
import { ParticipantService } from '../services/feed/participant.service';
import { ParticipantController } from '../controllers/participant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [
    TypeOrmModule.forFeature([ParticipantEntity])
  ],
  providers: [ParticipantService],
  controllers: [ParticipantController]
})
export class ParticipantModule {}
