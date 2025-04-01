import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import {from , Observable } from 'rxjs';
import {ReclamationEntity} from '../../models/reclamation/reclamation.entity';
import {InterfaceReclamation} from '../../models/reclamation/reclamation.interface';

@Injectable()
export class ReclamtionService {
    constructor (
        @InjectRepository(ReclamationEntity)
        private readonly reclamationRepository : Repository<ReclamationEntity>
    ){}

    createReclamation (interfaceReclamation : InterfaceReclamation) : Observable<InterfaceReclamation> {
        return from(this.reclamationRepository.save(interfaceReclamation));
    }

    async findAllReclamations(): Promise<InterfaceReclamation[]> {
        const reclamations = await this.reclamationRepository.find();

        return reclamations.map(reclamation => {
            return {
                opinion: reclamation.opinion,
                author: reclamation.author as string,
                image: reclamation.image as string,
                id: reclamation.id,
                imageHex: null
            } as InterfaceReclamation
        }
        )
    }

    updateReclamation (id:number , interfaceReclamation : InterfaceReclamation): Observable<UpdateResult> {
        return from(this.reclamationRepository.update(id,interfaceReclamation));

    }

    deleteReclamation (id:number) : Observable<DeleteResult>{
        return from(this.reclamationRepository.delete(id));
    }
}