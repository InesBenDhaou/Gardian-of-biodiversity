import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import {from , Observable } from 'rxjs';
import {PlantEntity} from '../../models/plant/plant.entity';
import {InterfacePlant} from '../../models/plant/plant.interface';

export class PlantService {
    constructor (
        @InjectRepository(PlantEntity)
        private readonly plantRepository : Repository<PlantEntity>
    ){}

    

    createPlant (interfacePlant : InterfacePlant) : Observable<InterfacePlant> {
        return from(this.plantRepository.save(interfacePlant));
    }

    async findAllPlants(): Promise<InterfacePlant[]> {
        const plants = await this.plantRepository.find();

        return plants.map(plant => {
            return {
                description: plant.description,
                title: plant.title as string,
                image: plant.image as string,
                id: plant.id,
                imageHex: null
            } as InterfacePlant
        }
        )
    }

    updatePlant (id:number , interfacePlant : InterfacePlant): Observable<UpdateResult> {
        return from(this.plantRepository.update(id,interfacePlant));

    }

    deletePlant (id:number) : Observable<DeleteResult>{
        return from(this.plantRepository.delete(id));
    }
}