import { Body, Controller, Delete, Get, Param, Post ,Put, UploadedFile, UseInterceptors} from '@nestjs/common';
import {from , Observable } from 'rxjs';
import { UpdateResult , DeleteResult } from 'typeorm';
import { FileInterceptor } from '@nestjs/platform-express';
import { AdviceService } from '../services/feed/advice.service';
import { AdviceInterface } from '../models/advice/advice.interface';
import { AdviceEntity } from '../models/advice/advice.entity';

@Controller('advice')
export class AdviceController {
    constructor ( private adviceService: AdviceService ){

    }
    
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
      @UploadedFile() file: any,
      @Body() body: AdviceInterface
    ) {
      const advice = new AdviceEntity();
      advice.description = body.description ;
      advice.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.adviceService.createAdvice(advice);
    }

    @Get()
    async findAll() : Promise<AdviceInterface[]> {
        return await this.adviceService.findAllAdvices();
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async update(
      @UploadedFile() file: any,
      @Param('id') id:number ,
      @Body() body: AdviceInterface
    ) {
      const advice = new AdviceEntity();
      advice.description = body.description ;
      advice.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.adviceService.updateAdvice(id , advice);
    }

  
    @Delete(':id')
    delete( @Param('id') id:number): Observable<DeleteResult>{
        return this.adviceService.deleteAdvice(id);
    }

   
}
