
import { ReclamtionService } from '../services/feed/reclamation.service';
import {from , Observable } from 'rxjs';
import { UpdateResult , DeleteResult } from 'typeorm';
import {InterfaceReclamation} from '../models/reclamation/reclamation.interface';
import { Body, Controller, Delete, Get, Param, Post ,Put ,UseInterceptors,UploadedFile} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ReclamationEntity } from '../models/reclamation/reclamation.entity';

@Controller('reclamation')
export class ReclamationController {
    constructor ( private reclamationService: ReclamtionService ){

    }
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
      @UploadedFile() file: any,
      @Body() body: InterfaceReclamation
    ) {
      const reclamation = new ReclamationEntity();
      reclamation.opinion = body.opinion;
      reclamation.author = body.author;
      reclamation.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.reclamationService.createReclamation(reclamation);
    }

    @Get()
    async findAll() : Promise<InterfaceReclamation[]> {
        return await this.reclamationService.findAllReclamations();
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async update(
      @UploadedFile() file: any,
      @Param('id') id:number ,
      @Body() body: InterfaceReclamation
    ) {
      const reclamation = new ReclamationEntity();
      reclamation.opinion = body.opinion;
      reclamation.author = body.author;
      reclamation.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.reclamationService.updateReclamation(id,reclamation);
    }


    @Delete(':id')
    delete(@Param('id') id:number): Observable<DeleteResult>{
        return this.reclamationService.deleteReclamation(id);
    }

   
}
