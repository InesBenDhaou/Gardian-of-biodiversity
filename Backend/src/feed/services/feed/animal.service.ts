import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FeedAnimalEntity } from '../../models/animal/animal.entity';
import { FeedAnimal } from 'src/feed/models/animal/animal.interface';
import { from, Observable } from 'rxjs';

export class FeedService {
    constructor(
        @InjectRepository(FeedAnimalEntity)
        private readonly feedAnimalRepository: Repository<FeedAnimalEntity>
    ) { }

    createAnimal(feedAnimal: FeedAnimal): Observable<FeedAnimal> {

        return from(this.feedAnimalRepository.save(feedAnimal));
    }

    async findAllAnimals(): Promise<FeedAnimal[]> {
        const animals = await this.feedAnimalRepository.find();

        return animals.map(animal => {
            return {
                description: animal.description,
                title: animal.title as string,
                image: animal.image as string,
                id: animal.id,
                imageHex: null
            } as FeedAnimal
        }
        )
    }

    updateAnimal(id: number, feedAnimal: FeedAnimal): Observable<UpdateResult> {
        return from(this.feedAnimalRepository.update(id, feedAnimal));

    }

    deleteAnimal(id: number): Observable<DeleteResult> {
        return from(this.feedAnimalRepository.delete(id));
    }
}
