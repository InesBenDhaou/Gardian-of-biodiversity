
import {from , Observable } from 'rxjs';
import { UpdateResult , DeleteResult } from 'typeorm';
import { Body, Controller, Delete, Get, Param, Post ,Put,UseInterceptors,UploadedFile} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ParticipantEntity } from '../models/participant/participant.entity';
import { ParticipantInterface } from '../models/participant/participant.interface';
import { ParticipantService } from '../services/feed/participant.service';

@Controller('participant')
export class ParticipantController {
    constructor ( private partenaireService:ParticipantService ){

    }
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async create(
      @Body() body: ParticipantInterface
    )
    {
        const participant=new ParticipantEntity();
        participant.name=body.name;
        participant.email=body.email;
        participant.phoneNumber=body.phoneNumber;
        participant.message=body.message;
        participant.eventTitle=body.eventTitle;
        participant.status=body.status;
      return this.partenaireService.createParticipant(participant);
     
    }

    @Get()
    async findAll() : Promise<ParticipantInterface[]> {
        return await this.partenaireService.findAllParticipants();
    }
    
    
    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async update(
        @UploadedFile() file: any,
        @Param('id') id:number ,
        @Body() Body: ParticipantInterface
        ){
            const participant = new ParticipantEntity();
            participant.name=Body.name;
            participant.email=Body.email;
            participant.phoneNumber=Body.phoneNumber;
            participant.message=Body.message;
            participant.eventTitle=Body.eventTitle;
            participant.status=Body.status;
          return this.partenaireService.updateParticipant(id,participant);
          
        }
    @Delete(':id')
    delete(@Param('id') id:number): Observable<DeleteResult>{
        return this.partenaireService.deleteParticipant(id);
       
    }

   
}