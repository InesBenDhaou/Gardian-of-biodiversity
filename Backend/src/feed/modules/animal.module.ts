import { Module } from '@nestjs/common';
import { FeedService } from '../services/feed/animal.service';
import { FeedController } from '../controllers/animal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {FeedAnimalEntity} from'../models/animal/animal.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([FeedAnimalEntity ])
  ],
  providers: [FeedService],
  controllers: [FeedController]
})
export class FeedModule {}
