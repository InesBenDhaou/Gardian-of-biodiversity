import { Module } from '@nestjs/common';
import { AdviceController } from '../controllers/advice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdviceEntity } from '../models/advice/advice.entity';
import { AdviceService } from '../services/feed/advice.service';

@Module({
  imports : [
    TypeOrmModule.forFeature([AdviceEntity ])
  ],
  providers: [AdviceService],
  controllers: [AdviceController]
})
export class AdviceModule {}
