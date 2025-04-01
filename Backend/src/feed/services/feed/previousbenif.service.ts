import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import {from , Observable } from 'rxjs';
import {PreviousBenifEntity} from '../../models/previousBenif/previousbenif.entity';
import {PreviousBenifInterface} from '../../models/previousBenif/previousbenif.interface';

export class PreviousBenifService {
    constructor (
        @InjectRepository(PreviousBenifEntity)
        private readonly previousbenifRepository : Repository<PreviousBenifEntity>
    ){}

    

    createPreviousBenif (previousBenifInterface : PreviousBenifInterface) : Observable<PreviousBenifInterface> {
        return from(this.previousbenifRepository.save(previousBenifInterface));
    }

    

    async findAllPreviousBenifs(): Promise<PreviousBenifInterface[]> {
        const previousbenifs = await this.previousbenifRepository.find();

        return previousbenifs.map(previousbenif=> {
            return {
                about: previousbenif.about,
                name: previousbenif.name as string,
                duration : previousbenif.duration as string ,
                image: previousbenif.image as string,
                id: previousbenif.id,
                imageHex: null
            } as PreviousBenifInterface
        }
        )
    }

    updatePreviousBenif (id:number , previousBenifInterface : PreviousBenifInterface): Observable<UpdateResult> {
        return from(this.previousbenifRepository.update(id,previousBenifInterface));

    }

    deletePreviousBenif (id:number) : Observable<DeleteResult>{
        return from(this.previousbenifRepository.delete(id));
    }
}