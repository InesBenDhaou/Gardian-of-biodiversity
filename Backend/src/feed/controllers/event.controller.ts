
import {EventService } from '../services/feed/event.service';
import {from , Observable } from 'rxjs';
import { UpdateResult , DeleteResult } from 'typeorm';
import {EventInterface} from '../models/event/event.interface';
import { Body, Controller, Delete, Get, Param, Post ,Put ,UseInterceptors,UploadedFile} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import {EventEntity} from '../models/event/event.entity';

@Controller('event')
export class EventController {
    constructor ( private eventService:EventService){

    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
      @UploadedFile() file: any,
      @Body() body: EventInterface
    ) {
      const event = new EventEntity();
      event.title=body.title;
      event.date=new Date(body.date);
      event.place=body.place;
      event.projet=body.projet;
      event.content=body.content;
      
      event.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.eventService.createEvent(event);
    }

    @Get()
    async findAll() : Promise<EventInterface[]> {
        return await this.eventService.findAllEvents();
    }
    
    @Get('forthcoming')
    async findforthcomingEvents(): Promise<EventInterface[]> {
        return await this.eventService.findForthcomingEvents();
    }
    @Get('achievements')
    async findachievements(): Promise<EventInterface[]> {
        return await this.eventService.findAchievements();
    }
    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async update(
        @UploadedFile() file: any,
        @Param('id') id:number ,
        @Body() Body: EventInterface
        ){
            const event=new EventEntity();
            event.title=Body.title;
            event.projet=Body.projet;
            event.date=new Date(Body.date.toString());
            event.place=Body.place;
            event.content=Body.content;
            event.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
        return this.eventService.updateEvent(id,event);

        }
   
    @Delete(':id')
    delete(@Param('id') id:number): Observable<DeleteResult>{
        return this.eventService.deleteEvent(id);
    }

   
}
