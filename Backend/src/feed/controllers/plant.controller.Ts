
import { PlantService } from '../services/feed/plant.service';
import {from , Observable } from 'rxjs';
import { UpdateResult , DeleteResult } from 'typeorm';
import {InterfacePlant } from '../models/plant/plant.interface';
import { PlantEntity } from '../models/plant/plant.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { Body, Controller, Delete, Get, Param, Post ,Put ,UploadedFile, UseInterceptors} from '@nestjs/common';

@Controller('plant')
export class PlantController {
    constructor ( private plantService: PlantService ){

    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
      @UploadedFile() file: any,
      @Body() body: InterfacePlant
    ) {
      const plant = new PlantEntity();
      plant.title = body.title;
      plant.description = body.description;
      plant.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.plantService.createPlant(plant);
    }

    @Get()
    async findAll() : Promise<InterfacePlant[]> {
        return await this.plantService.findAllPlants();
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async update(
      @UploadedFile() file: any,
      @Param('id') id:number ,
      @Body() body: InterfacePlant
    ) {
      const plant = new PlantEntity();
      plant.title = body.title;
      plant.description = body.description;
      plant.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.plantService.updatePlant(id , plant);
    }
 
    @Delete(':id')
    delete(@Param('id') id:number): Observable<DeleteResult>{
        return this.plantService.deletePlant(id);
    }

   
}
