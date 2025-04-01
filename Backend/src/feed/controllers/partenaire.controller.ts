
import { PartenaireService } from '../services/feed/partenaire.service';
import {from , Observable } from 'rxjs';
import { UpdateResult , DeleteResult } from 'typeorm';
import {PartenaireInterface} from '../models/partenaire/partenaire.interface';
import { Body, Controller, Delete, Get, Param, Post ,Put ,UseInterceptors,UploadedFile} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import { PartenaireEntity} from '../models/partenaire/partenaire.entity';

@Controller('partenaire')
export class PartenaireController {
    constructor ( private partenaireService:PartenaireService){

    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
      @UploadedFile() file: any,
      @Body() body: PartenaireInterface
    ) {
      const partenaire = new PartenaireEntity();
      partenaire.name=body.name;
      partenaire.description=body.description;
      partenaire.link=body.link;
      partenaire.categorie=body.categorie;
      partenaire.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
      return this.partenaireService.createPartenaire(partenaire);
    }

    @Get()
    async findAll() : Promise<PartenaireInterface[]> {
        return await this.partenaireService.findAllPartenaires();
    }
    @Get('public')
    async findPublic() : Promise<PartenaireInterface[]> {
      return await this.partenaireService.findPartenairesPublic();
    }
    @Get('association')
    async findAssociation() : Promise<PartenaireInterface[]> {
      return await this.partenaireService.findPartenairesAssociative();
    }
    @Get('entreprise')
    async findEntreprise() : Promise<PartenaireInterface[]> {
      return await this.partenaireService.findPartenairesEntreprise();
    }
    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async update(
        @UploadedFile() file: any,
        @Param('id') id:number ,
        @Body() Body: PartenaireInterface
        ){
            const partenaire=new PartenaireEntity();
            partenaire.name=Body.name;
            partenaire.categorie=Body.categorie;
            partenaire.description=Body.description;
            partenaire.link=Body.link;
            partenaire.imageHex = ("\\x" + file.buffer.toString("hex")) as any;
        return this.partenaireService.updatePartenaire(id,partenaire);

        }
    @Delete(':id')
    delete(@Param('id') id:number): Observable<DeleteResult>{
        return this.partenaireService.deletePartenaire(id);
    }

   
}
