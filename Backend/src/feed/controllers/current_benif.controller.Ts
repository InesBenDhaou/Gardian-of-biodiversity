
import { CurrentBenifService } from '../services/feed/currentbenif.service';
import {from , Observable } from 'rxjs';
import { UpdateResult , DeleteResult } from 'typeorm';
import {InterfaceCurrentBenif} from '../models/currentBenif/currentBenif.interface';
import { Body, Controller, Delete, Get, Param, Post ,Put,UseInterceptors,UploadedFile} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CurrentBenifiEntity } from '../models/currentBenif/currentBenif.entity';

@Controller('currentbenificier')
export class CurrentbenifController {
    constructor ( private currentBenifService: CurrentBenifService ){

    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
      @UploadedFile() file: any,
      @Body() body: InterfaceCurrentBenif
    ) {
      const currentBenif = new CurrentBenifiEntity();
      currentBenif.name = body.name;
      currentBenif.about = body.about;
      currentBenif.date = body.date;
      currentBenif.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.currentBenifService.createCurrentBenif(currentBenif);
    }


    @Get()
    async findAll() : Promise<InterfaceCurrentBenif[]> {
        return await this.currentBenifService.findAllCurrentBenifs();
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async update(
      @UploadedFile() file: any,
      @Param('id') id:number ,
      @Body() body: InterfaceCurrentBenif
    ) {
      const currentBenif = new CurrentBenifiEntity();
      currentBenif.name = body.name;
      currentBenif.about = body.about;
      currentBenif.date = body.date;
      currentBenif.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.currentBenifService.updateCurrentBenif(id,currentBenif);
    }

    @Delete(':id')
    delete(@Param('id') id:number): Observable<DeleteResult>{
        return this.currentBenifService.deleteCurrentBenif(id);
    }

   
}
