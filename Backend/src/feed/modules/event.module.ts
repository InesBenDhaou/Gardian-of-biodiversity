import { Module } from '@nestjs/common';
import { EventController} from '../controllers/event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {EventEntity} from '../models/event/event.entity';
import { EventService} from '../services/feed/event.service';

@Module({
  imports : [
    TypeOrmModule.forFeature([EventEntity ])
  ],
  providers: [EventService],
  controllers: [EventController]
})
export class EventModule {}
