
import { ReclamtionService } from '../services/feed/reclamation.service';
import {from , Observable } from 'rxjs';
import { UpdateResult , DeleteResult } from 'typeorm';
import {InterfaceReclamation} from '../models/reclamation/reclamation.interface';
import { Body, Controller, Delete, Get, Param, Post ,Put ,UseInterceptors,UploadedFile} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ReclamationEntity } from '../models/reclamation/reclamation.entity';
import { InterfacePendingReclamation } from '../models/pendingreclamation/pendingrec.interface';
import { PendingReclamtionService } from '../services/feed/pendingrec.service';
import { PendingReclamationEntity } from '../models/pendingreclamation/pendingrec.entitity';

@Controller('pendingreclamation')
export class PendingReclamationController {
    constructor ( private pendingreclamationService: PendingReclamtionService ){

    }
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
      @UploadedFile() file: any,
      @Body() body: InterfacePendingReclamation
    ) {
      const reclamation = new PendingReclamationEntity();
      reclamation.opinion = body.opinion;
      reclamation.author = body.author;
      reclamation.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.pendingreclamationService.createPendingReclamation(reclamation);
    }

    @Get()
    async findAll() : Promise<InterfacePendingReclamation[]> {
        return await this.pendingreclamationService.findAllPendingReclamations();
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async update(
      @UploadedFile() file: any,
      @Param('id') id:number ,
      @Body() body: InterfacePendingReclamation
    ) {
        const reclamation = new PendingReclamationEntity();
        reclamation.opinion = body.opinion;
        reclamation.author = body.author;
        reclamation.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.pendingreclamationService.updatePendingReclamation(id , reclamation);
    }

    @Delete(':id')
    delete(@Param('id') id:number): Observable<DeleteResult>{
        return this.pendingreclamationService.deletePendingReclamation(id);
    }

   
}
