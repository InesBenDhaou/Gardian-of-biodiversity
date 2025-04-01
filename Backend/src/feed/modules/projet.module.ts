import { Module } from '@nestjs/common';
import { ProjetService } from '../services/feed/projet.service';
import { ProjetController } from '../controllers/projet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjetEntity } from '../models/projet/projet.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([ProjetEntity ])
  ],
  providers: [ProjetService],
  controllers: [ProjetController]
})
export class ProjetModule {}
