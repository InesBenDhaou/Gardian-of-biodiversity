import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PendingReclamationEntity } from '../models/pendingreclamation/pendingrec.entitity';
import { PendingReclamationController } from '../controllers/pendingrec.controller';
import { PendingReclamtionService } from '../services/feed/pendingrec.service';

@Module({
  imports : [
    TypeOrmModule.forFeature([PendingReclamationEntity ])
  ],
  providers: [PendingReclamtionService],
  controllers: [PendingReclamationController]
})
export class PendingReclamationModule {}
