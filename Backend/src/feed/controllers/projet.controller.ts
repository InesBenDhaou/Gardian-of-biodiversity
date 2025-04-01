
import {from , Observable } from 'rxjs';
import { UpdateResult , DeleteResult } from 'typeorm';
import {ProjetInterface} from '../models/projet/projet.interface';
import { Body, Controller, Delete, Get, Param, Post ,Put,UseInterceptors,UploadedFile} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProjetEntity } from '../models/projet/projet.entity';
import { ProjetService } from '../services/feed/projet.service';


@Controller('projet')
export class ProjetController {
    constructor ( private projetService:ProjetService ){

    }
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async create(
      @Body() body: ProjetInterface
    )
    {
      const projet = new ProjetEntity();
      projet.title=body.title;
      projet.content=body.content;
      
      return this.projetService.createProjet(projet);
    }

    @Get()
    async findAll() : Promise<ProjetInterface[]> {
        return await this.projetService.findAllProjects();
    }
    @Get('projectsTitle')
    async findAllProjectsTitles() : Promise<string[]> {
      return await this.projetService.getAllProjectTitles();
    }
    
    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async update(
        @UploadedFile() file: any,
        @Param('id') id:number ,
        @Body() Body: ProjetInterface
        ){
          const projet = new ProjetEntity();
          projet.title=Body.title;
          projet.content=Body.content;
          return this.projetService.updateProjet(id,projet);  
    
        }
    @Delete(':id')
    delete(@Param('id') id:number): Observable<DeleteResult>{
        return this.projetService.deleteProjet(id);
    }

   
}