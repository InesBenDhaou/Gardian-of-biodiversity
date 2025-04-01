import { Module } from '@nestjs/common';
import { ReclamtionService } from '../services/feed/reclamation.service';
import { ReclamationController } from '../controllers/reclamation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ReclamationEntity} from'../models/reclamation/reclamation.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([ReclamationEntity ])
  ],
  providers: [ReclamtionService],
  controllers: [ReclamationController]
})
export class ReclamationModule {}
