import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import {from , Observable } from 'rxjs';
import { PendingReclamationEntity } from 'src/feed/models/pendingreclamation/pendingrec.entitity';
import { InterfacePendingReclamation } from 'src/feed/models/pendingreclamation/pendingrec.interface';

@Injectable()
export class PendingReclamtionService {
    constructor (
        @InjectRepository(PendingReclamationEntity)
        private readonly pendingreclamationRepository : Repository<PendingReclamationEntity>
    ){}

    createPendingReclamation (interfacePendingReclamation : InterfacePendingReclamation) : Observable<InterfacePendingReclamation> {
        return from(this.pendingreclamationRepository.save(interfacePendingReclamation));
    }

    async findAllPendingReclamations(): Promise<InterfacePendingReclamation[]> {
        const reclamations = await this.pendingreclamationRepository.find();

        return reclamations.map(reclamation => {
            return {
                opinion: reclamation.opinion,
                author: reclamation.author as string,
                image: reclamation.image as string,
                id: reclamation.id,
                imageHex: null
            } as InterfacePendingReclamation
        }
        )
    }

    updatePendingReclamation (id:number , interfacePendingReclamation : InterfacePendingReclamation): Observable<UpdateResult> {
        return from(this.pendingreclamationRepository.update(id,interfacePendingReclamation));

    }

    deletePendingReclamation (id:number) : Observable<DeleteResult>{
        return from(this.pendingreclamationRepository.delete(id));
    }
}