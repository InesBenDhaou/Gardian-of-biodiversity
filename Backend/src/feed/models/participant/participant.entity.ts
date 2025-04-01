import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('participant')
export class ParticipantEntity {
    @PrimaryGeneratedColumn ()
    id : number ;
    @Column ({default : ''})
    name:string ;
    @Column ({default : ''})
    email:string ;
    @Column({default : ''})
    phoneNumber: string;
    @Column ({default : ''})
    message:string ;
    @Column ({default : ''})
    eventTitle:string ;
    @Column ({default : 'pending'})
    status:string ;

}