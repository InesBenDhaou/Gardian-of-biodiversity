import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';
import { ParticipantEntity } from 'src/feed/models/participant/participant.entity';
import { ParticipantInterface } from 'src/feed/models/participant/participant.interface';

export class ParticipantService {
    constructor(
        @InjectRepository(ParticipantEntity)
        private readonly participantRepository: Repository<ParticipantEntity>
    ) { }

    createParticipant(participantInterface: ParticipantInterface): Observable<ParticipantInterface> {
        
        return from(this.participantRepository.save(participantInterface));
    }

    async findAllParticipants(): Promise<ParticipantInterface[]> {
        const Participants=await this.participantRepository.find();

        return Participants.map(participant => {
            return {
                id:participant.id,
                name:participant.name,
                email:participant.email,
                message:participant.message,
                eventTitle:participant.eventTitle,
                status:participant.status,
               
            } as ParticipantInterface
        }
        )
    }
    

    updateParticipant(id: number, participantInterface: ParticipantInterface): Observable<UpdateResult> {
        return from (this.participantRepository.update(id,participantInterface))
    }

    deleteParticipant(id: number): Observable<DeleteResult> {
        return from(this.participantRepository.delete(id));
    }
}
