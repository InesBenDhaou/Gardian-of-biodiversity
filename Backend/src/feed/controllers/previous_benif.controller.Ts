
import { PreviousBenifService } from '../services/feed/previousbenif.service';
import {from , Observable } from 'rxjs';
import { UpdateResult , DeleteResult } from 'typeorm';
import {PreviousBenifInterface} from '../models/previousBenif/previousbenif.interface';
import { Body, Controller, Delete, Get, Param, Post ,Put,UseInterceptors,UploadedFile} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PreviousBenifEntity } from '../models/previousBenif/previousbenif.entity';

@Controller('previousbenificier')
export class PreviousBenifController {
    constructor ( private previousBenifService: PreviousBenifService ){

    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
      @UploadedFile() file: any,
      @Body() body: PreviousBenifInterface
    ) {
      const previousBenif = new PreviousBenifEntity();
      previousBenif.name = body.name;
      previousBenif.about = body.about;
      previousBenif.duration = body.duration;
      previousBenif.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.previousBenifService.createPreviousBenif(previousBenif);
    }

    @Get()
    async findAll() : Promise<PreviousBenifInterface[]> {
        return await this.previousBenifService.findAllPreviousBenifs();
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async update(
      @UploadedFile() file: any,
      @Param('id') id:number ,
      @Body() body: PreviousBenifInterface
    ) {
      const previousBenif = new PreviousBenifEntity();
      previousBenif.name = body.name;
      previousBenif.about = body.about;
      previousBenif.duration = body.duration;
      previousBenif.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.previousBenifService.updatePreviousBenif(id,previousBenif);
    }

    
    @Delete(':id')
    delete(@Param('id') id:number): Observable<DeleteResult>{
        return this.previousBenifService.deletePreviousBenif(id);
    }

   
}
