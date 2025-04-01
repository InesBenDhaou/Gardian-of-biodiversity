import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Projets')
export class ProjetEntity {
    @PrimaryGeneratedColumn ()
    id : number ;
    @Column ({default : ''})
    title:string ;
    @Column ({default : ''})
    content:string ;

    
}
