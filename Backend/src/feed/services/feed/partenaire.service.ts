import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import {from , Observable } from 'rxjs';
import {PartenaireEntity} from '../../models/partenaire/partenaire.entity';
import {PartenaireInterface} from '../../models/partenaire/partenaire.interface';

export class PartenaireService {
    constructor (
        @InjectRepository(PartenaireEntity)
        private readonly partenaireRepository : Repository<PartenaireEntity>
    ){}

    

    createPartenaire (partenaireInterface : PartenaireInterface) : Observable<PartenaireInterface> {
        return from(this.partenaireRepository.save(partenaireInterface));
    }

    async findAllPartenaires(): Promise< PartenaireInterface[]> {
        const partenaires = await this.partenaireRepository.find();

        return partenaires.map(partenaire => {
            return {
                id:partenaire.id,
                name:partenaire.name,
                description:partenaire.description,
                link:partenaire.link,
                categorie:partenaire.categorie,
                image:partenaire.image,
                imageHex: null
            } as PartenaireInterface
        }
        )
    }

    async findPartenairesPublic(): Promise< PartenaireInterface[]> {
        const partenaires = await this.partenaireRepository.find({
            where: { categorie: 'public' }
        });

        return partenaires.map(partenaire => {
            return {
                id:partenaire.id,
                name:partenaire.name,
                description:partenaire.description,
                link:partenaire.link,
                categorie:partenaire.categorie,
                image:partenaire.image,
                imageHex: null
            } as PartenaireInterface
        }
        )
    }
    async findPartenairesEntreprise(): Promise< PartenaireInterface[]> {
        const partenaires = await this.partenaireRepository.find({
            where: { categorie: 'entreprise' }
        });

        return partenaires.map(partenaire => {
            return {
                id:partenaire.id,
                name:partenaire.name,
                description:partenaire.description,
                link:partenaire.link,
                categorie:partenaire.categorie,
                image:partenaire.image,
                imageHex: null
            } as PartenaireInterface
        }
        )
    }
    async findPartenairesAssociative(): Promise< PartenaireInterface[]> {
        const partenaires = await this.partenaireRepository.find({
            where: { categorie: 'association' }
        });

        return partenaires.map(partenaire => {
            return {
                id:partenaire.id,
                name:partenaire.name,
                description:partenaire.description,
                link:partenaire.link,
                categorie:partenaire.categorie,
                image:partenaire.image,
                imageHex: null
            } as PartenaireInterface
        }
        )
    }

    

    updatePartenaire (id:number , partenaireInterface : PartenaireInterface): Observable<UpdateResult> {
        return from(this.partenaireRepository.update(id,partenaireInterface));

    }

    deletePartenaire (id:number) : Observable<DeleteResult>{
        return from(this.partenaireRepository.delete(id));
    }
}