
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';
import { BeBenificierEntity } from 'src/feed/models/beBenificier/beBenificier.entity';
import { BeBenificierInterface } from 'src/feed/models/beBenificier/beBenificier.interface';

export class BeBenificierService {
    constructor(
        @InjectRepository(BeBenificierEntity)
        private readonly beBenificierRepository: Repository<BeBenificierEntity>
    ) { }

    createBeBenificier(beBenificierInterface: BeBenificierInterface): Observable<BeBenificierInterface> {

        return from(this.beBenificierRepository.save(beBenificierInterface));
    }

    async findAllBeBenificiers(): Promise<BeBenificierInterface[]> {
        const BeBenificiers = await this.beBenificierRepository.find();

        return BeBenificiers.map(beBenificier => {
            return {
                description: beBenificier.description,
                name : beBenificier.name,
                email : beBenificier.email ,
                benificier : beBenificier.benificier,
                image: beBenificier.image as string,
                id: beBenificier.id,
                imageHex: null
            } as BeBenificierInterface
        }
        )
    }

    updateBeBenificier(id: number, beBenificierInterface: BeBenificierInterface): Observable<UpdateResult> {
        return from(this.beBenificierRepository.update(id, beBenificierInterface));

    }

    deleteBeBenificier(id: number): Observable<DeleteResult> {
        return from(this.beBenificierRepository.delete(id));
    }
}
