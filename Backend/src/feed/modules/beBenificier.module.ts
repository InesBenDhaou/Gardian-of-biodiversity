import { Module } from '@nestjs/common';
import { BeBenificierService } from '../services/feed/BeBenificier.service';
import { BeBenificierController } from '../controllers/bebenificier.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeBenificierEntity } from '../models/beBenificier/beBenificier.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([BeBenificierEntity ])
  ],
  providers: [BeBenificierService],
  controllers: [BeBenificierController]
})
export class BeBenificierModule {}
