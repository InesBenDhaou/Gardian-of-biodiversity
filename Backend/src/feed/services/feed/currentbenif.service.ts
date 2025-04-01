import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import {CurrentBenifiEntity} from'../../models/currentBenif/currentBenif.entity';
import { InterfaceCurrentBenif } from 'src/feed/models/currentBenif/currentBenif.interface';
import {from , Observable } from 'rxjs';

export class CurrentBenifService {
    constructor (
        @InjectRepository(CurrentBenifiEntity)
        private readonly CurrentBenifRepository : Repository<CurrentBenifiEntity>
    ){}

    

    createCurrentBenif(interfaceCurrentBenif : InterfaceCurrentBenif) : Observable<InterfaceCurrentBenif> {
        return from(this.CurrentBenifRepository.save(interfaceCurrentBenif));
    }

    async findAllCurrentBenifs(): Promise<InterfaceCurrentBenif[]> {
        const currentbenifs = await this.CurrentBenifRepository.find();

        return currentbenifs.map(currentbenif=> {
            return {
                about: currentbenif.about,
                name: currentbenif.name as string,
                date : currentbenif.date as string ,
                image: currentbenif.image as string,
                id: currentbenif.id,
                imageHex: null
            } as InterfaceCurrentBenif
        }
        )
    }

   

    updateCurrentBenif (id:number , InterfaceCurrentBenif : InterfaceCurrentBenif): Observable<UpdateResult> {
        return from(this.CurrentBenifRepository.update(id,InterfaceCurrentBenif));

    }

    deleteCurrentBenif (id:number) : Observable<DeleteResult>{
        return from(this.CurrentBenifRepository.delete(id));
    }
}
