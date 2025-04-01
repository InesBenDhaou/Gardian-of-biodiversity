import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedModule } from './feed/modules/animal.module';
import {PlantModule} from './feed/modules/plant.module';
import {ParcModule} from './feed/modules/parc.module';
import {NewsModule} from  './feed/modules/news.module';
import {ReclamationModule} from './feed/modules/reclamation.module';
import {CurrentBenifModule} from './feed/modules/currentbenif.module';
import {PreviousBenifModule} from './feed/modules/previousbenif.module';
import {UserModule} from './feed/modules/user.module';
import {AdviceModule}from './feed/modules/advice.module';
import { BeBenificierModule } from './feed/modules/bebenificier.module';
import { PendingReclamationModule } from './feed/modules/pendingrec.module';
import { PartenaireModule } from './feed/modules/partenaire.module';
import { EventModule } from './feed/modules/event.module';
import { TeamMemberModule } from './feed/modules/teamMember.module';
import { ProjetModule } from './feed/modules/projet.module';
import {ParticipantModule} from './feed/modules/participant.module';
@Module({
  imports: [
    ConfigModule.forRoot ({isGlobal: true}),
    TypeOrmModule.forRoot ({
      type : 'postgres',
      host : process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT) ,
      username : process.env.POSTGRES_USER ,
      password : process.env.POSTGRES_PASSWORD,
      database : process.env.POSTGRES_DATABASE,
      autoLoadEntities : true ,
      synchronize : true ,
    }),
    FeedModule,
    PlantModule,
    ParcModule ,
    NewsModule ,
    ReclamationModule , 
    PendingReclamationModule,
    CurrentBenifModule ,
    PreviousBenifModule ,
    UserModule ,
    AdviceModule ,
    BeBenificierModule,
    PartenaireModule,
    EventModule,
    ParticipantModule ,
    TeamMemberModule,
    ProjetModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
