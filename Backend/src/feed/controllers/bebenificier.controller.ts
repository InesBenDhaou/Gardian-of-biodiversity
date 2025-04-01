
import { CurrentBenifService } from '../services/feed/currentbenif.service';
import {from , Observable } from 'rxjs';
import { UpdateResult , DeleteResult } from 'typeorm';
import {InterfaceCurrentBenif} from '../models/currentBenif/currentBenif.interface';
import { Body, Controller, Delete, Get, Param, Post ,Put,UseInterceptors,UploadedFile} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CurrentBenifiEntity } from '../models/currentBenif/currentBenif.entity';
import { BeBenificierService } from '../services/feed/BeBenificier.service';
import { BeBenificierEntity } from '../models/beBenificier/beBenificier.entity';
import { BeBenificierInterface } from '../models/beBenificier/beBenificier.interface';

@Controller('bebenificier')
export class BeBenificierController {
    constructor ( private beBenificierService: BeBenificierService ){

    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
      @UploadedFile() file: any,
      @Body() body: BeBenificierInterface
    ) {
      const beBenificier = new BeBenificierEntity();
      beBenificier.name = body.name;
      beBenificier.description = body.description;
      beBenificier.email = body.email;
      beBenificier.benificier=body.benificier;
      beBenificier.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.beBenificierService.createBeBenificier(beBenificier);
    }

    @Get()
    async findAll() : Promise<BeBenificierInterface[]> {
        return await this.beBenificierService.findAllBeBenificiers();
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async update(
      @UploadedFile() file: any,
      @Param('id') id:number ,
      @Body() body: BeBenificierInterface
    ) {
      const beBenificier = new BeBenificierEntity();
      beBenificier.name = body.name;
      beBenificier.description = body.description;
      beBenificier.email = body.email;
      beBenificier.benificier=body.benificier;
      beBenificier.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.beBenificierService.updateBeBenificier(id,beBenificier);
    }
    @Delete(':id')
    delete(@Param('id') id:number): Observable<DeleteResult>{
        return this.beBenificierService.deleteBeBenificier(id);
    }

   
}
