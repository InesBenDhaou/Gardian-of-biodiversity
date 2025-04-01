import { Module } from '@nestjs/common';
import { CurrentbenifController } from '../controllers/current_benif.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrentBenifiEntity } from '../models/currentBenif/currentBenif.entity';
import { CurrentBenifService } from '../services/feed/currentbenif.service';

@Module({
  imports : [
    TypeOrmModule.forFeature([CurrentBenifiEntity ])
  ],
  providers: [CurrentBenifService],
  controllers: [CurrentbenifController]
})
export class CurrentBenifModule {}
