import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';

import { ProjetEntity } from 'src/feed/models/projet/projet.entity';
import { ProjetInterface } from 'src/feed/models/projet/projet.interface';

export class ProjetService {
    constructor(
        @InjectRepository(ProjetEntity)
        private readonly projetRepository: Repository<ProjetEntity>
    ) { }

    createProjet(projetInterface: ProjetInterface): Observable<ProjetInterface> {
        
        return from(this.projetRepository.save(projetInterface));
    }

    async findAllProjects(): Promise<ProjetInterface[]> {
        const Projets = await this.projetRepository.find();

        return Projets.map(projet => {
            return {
                id:projet.id,
                title:projet.title,
                content:projet.content,
               
            } as ProjetInterface
        }
        )
    }
    async getAllProjectTitles(): Promise<string[]> {
        const projects = await this.projetRepository.find();
        return projects.map(projet => projet.title);
      }

    updateProjet(id: number, projetInterface: ProjetInterface): Observable<UpdateResult> {
        return from(this.projetRepository.update(id, projetInterface));

    }

    deleteProjet(id: number): Observable<DeleteResult> {
        return from(this.projetRepository.delete(id));
    }
}
