import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import {from , Observable } from 'rxjs';
import {ParcEntity} from '../../models/parc/parc.entity';
import {InterfaceParc} from '../../models/parc/parc.interface';

export class ParcService {
    constructor (
        @InjectRepository(ParcEntity)
        private readonly parcRepository : Repository<ParcEntity>
    ){}

    

    createParc (interfaceParc : InterfaceParc) : Observable<InterfaceParc> {
        return from(this.parcRepository.save(interfaceParc));
    }

    async findAllParcs(): Promise<InterfaceParc[]> {
        const animals = await this.parcRepository.find();

        return animals.map(animal => {
            return {
                description: animal.description,
                title: animal.title as string,
                image: animal.image as string,
                id: animal.id,
                imageHex: null
            } as InterfaceParc
        }
        )
    }

    

    updateParc (id:number , interfaceParc : InterfaceParc): Observable<UpdateResult> {
        return from(this.parcRepository.update(id,interfaceParc));

    }

    deleteParc (id:number) : Observable<DeleteResult>{
        return from(this.parcRepository.delete(id));
    }
}