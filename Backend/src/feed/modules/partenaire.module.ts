import { Module } from '@nestjs/common';
import { PartenaireService } from '../services/feed/partenaire.service';
import { PartenaireController} from '../controllers/partenaire.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {PartenaireEntity} from'../models/partenaire/partenaire.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([PartenaireEntity ])
  ],
  providers: [ PartenaireService],
  controllers: [PartenaireController]
})
export class PartenaireModule {}
