
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';
import { AdviceEntity } from 'src/feed/models/advice/advice.entity';
import { AdviceInterface } from 'src/feed/models/advice/advice.interface';

export class AdviceService {
    constructor(
        @InjectRepository(AdviceEntity)
        private readonly adviceRepository: Repository<AdviceEntity>
    ) { }

    createAdvice(adviceInterface: AdviceInterface): Observable<AdviceInterface> {

        return from(this.adviceRepository.save(adviceInterface));
    }

    async findAllAdvices(): Promise<AdviceInterface[]> {
        const Advices = await this.adviceRepository.find();

        return Advices.map(advice => {
            return {
                description: advice.description,
                image: advice.image as string,
                id: advice.id,
                imageHex: null
            } as AdviceInterface
        }
        )
    }

    updateAdvice(id: number, adviceInterface: AdviceInterface): Observable<UpdateResult> {
        return from(this.adviceRepository.update(id, adviceInterface));

    }

    deleteAdvice(id: number): Observable<DeleteResult> {
        return from(this.adviceRepository.delete(id));
    }
}
