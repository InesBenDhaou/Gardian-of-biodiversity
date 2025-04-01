import { Module } from '@nestjs/common';
import { NewsService } from '../services/feed/news.service';
import { NewsController } from '../controllers/news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {NewsEntity} from'../models/news/news.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([NewsEntity])
  ],
  providers: [NewsService],
  controllers: [NewsController]
})
export class NewsModule {}
