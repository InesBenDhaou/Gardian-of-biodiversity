import { Module } from '@nestjs/common';
import { ParcService } from '../services/feed/parc.service';
import { ParcController } from '../controllers/parcs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ParcEntity} from'../models/parc/parc.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([ParcEntity ])
  ],
  providers: [ParcService],
  controllers: [ParcController]
})
export class ParcModule {}
