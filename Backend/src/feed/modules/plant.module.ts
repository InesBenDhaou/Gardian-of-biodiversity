import { Module } from '@nestjs/common';
import { PlantService } from '../services/feed/plant.service';
import { PlantController } from '../controllers/plant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {PlantEntity} from'../models/plant/plant.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([PlantEntity ])
  ],
  providers: [PlantService],
  controllers: [PlantController]
})
export class PlantModule {}
