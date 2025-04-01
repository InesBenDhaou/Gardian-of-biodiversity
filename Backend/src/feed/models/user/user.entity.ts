import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Users')
export class UserEntity {
    @PrimaryGeneratedColumn ()
    id : number ;
    @Column ({default : ''})
    name:string ;
    @Column ({unique :true })
    email:string ;
    @Column({})
    password: string;
    @Column({ default: '' }) 
    type: string;

}