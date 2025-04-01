import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('PreviousBenificiers')
export class PreviousBenifEntity {
    @PrimaryGeneratedColumn ()
    id : number ;
    @Column ({default : ''})
    name:string ;
    @Column ({default : ''})
    duration:string ;
    @Column ({default : ''})
    about:string ;
    @Column("bytea", {nullable: true, name: "image"})
    imageHex: string;


    // affichage --> findall
    private _image : Buffer | undefined;

    get image(): String {
        if (!this._image) this._image = Buffer.from(this.imageHex || '', "hex");
        return this._image.toString('base64');
    }
}