import { Module } from '@nestjs/common';
import { PreviousBenifService } from '../services/feed/previousbenif.service';
import { PreviousBenifController } from '../controllers/previous_benif.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {PreviousBenifEntity} from'../models/previousBenif/previousbenif.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([PreviousBenifEntity ])
  ],
  providers: [PreviousBenifService],
  controllers: [PreviousBenifController]
})
export class PreviousBenifModule {}
