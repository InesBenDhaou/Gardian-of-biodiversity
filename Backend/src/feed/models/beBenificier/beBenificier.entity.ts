import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Exclude, Expose } from 'class-transformer';


@Entity('BeBenificiers')
export class BeBenificierEntity {
   
    @PrimaryGeneratedColumn ()
    id : number ;

    @Column ({default : ''})
    name:string ;

    @Column ({default : ''})
    email:string ;

    @Column ({default : ''})
    description:string ;

    @Column ({default : ''})
    benificier:string ;
    
    @Column("bytea", {nullable: true, name: "image"})
    imageHex: string;


    // affichage --> findall
    private _image : Buffer | undefined;

    get image(): String {
        if (!this._image) this._image = Buffer.from(this.imageHex || '', "hex");
        return this._image.toString('base64');
    }


}