import { Body, Controller, Delete, Get, Param, Post ,Put, UploadedFile, UseInterceptors} from '@nestjs/common';
import { FeedService } from '../services/feed/animal.service';
import { FeedAnimal } from '../models/animal/animal.interface';
import {from , Observable } from 'rxjs';
import { UpdateResult , DeleteResult } from 'typeorm';
import { FileInterceptor } from '@nestjs/platform-express';
import { FeedAnimalEntity } from '../models/animal/animal.entity';

@Controller('animal')
export class FeedController {
    constructor ( private feedService: FeedService ){

    }
    
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
      @UploadedFile() file: any,
      @Body() body: FeedAnimal
    ) {
      const animal = new FeedAnimalEntity();
      animal.title = body.title;
      animal.description = body.description;
      animal.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.feedService.createAnimal(animal);
    }

    @Get()
    async findAll() : Promise<FeedAnimal[]> {
        return await this.feedService.findAllAnimals();
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async update(
      @UploadedFile() file: any,
      @Param('id') id:number ,
      @Body() body: FeedAnimal
    ) {
      const animal = new FeedAnimalEntity();
      animal.title = body.title;
      animal.description = body.description;
      animal.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.feedService.updateAnimal(id , animal);
    }

    
    @Delete(':id')
    delete( @Param('id') id:number): Observable<DeleteResult>{
        return this.feedService.deleteAnimal(id);
    }

   
}
