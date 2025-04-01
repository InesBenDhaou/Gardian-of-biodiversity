
import { ParcService } from '../services/feed/parc.service';
import {from , Observable } from 'rxjs';
import { UpdateResult , DeleteResult } from 'typeorm';
import {InterfaceParc} from '../models/parc/parc.interface';
import { Body, Controller, Delete, Get, Param, Post ,Put ,UseInterceptors,UploadedFile} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import { ParcEntity } from '../models/parc/parc.entity';

@Controller('parc')
export class ParcController {
    constructor ( private parcService: ParcService ){

    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
      @UploadedFile() file: any,
      @Body() body: InterfaceParc
    ) {
      const parc = new ParcEntity();
      parc.title = body.title;
      parc.description = body.description;
      parc.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.parcService.createParc(parc);
    }

    @Get()
    async findAll() : Promise<InterfaceParc[]> {
        return await this.parcService.findAllParcs();
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async update(
      @UploadedFile() file: any,
      @Param('id') id:number ,
      @Body() body: InterfaceParc
    ) {
      const parc = new ParcEntity();
      parc.title = body.title;
      parc.description = body.description;
      parc.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.parcService.updateParc(id , parc);
    }

   
    @Delete(':id')
    delete(@Param('id') id:number): Observable<DeleteResult>{
        return this.parcService.deleteParc(id);
    }

   
}
