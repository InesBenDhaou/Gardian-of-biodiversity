import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('PendingReclamationEntity')
export class PendingReclamationEntity {
    @PrimaryGeneratedColumn ()
    id : number ;
    @Column ({default : ''})
    opinion:string ;
    @Column ({default : ''})
    author:string ;
    @Column("bytea", {nullable: true, name: "image"})
    imageHex: string;


    // affichage --> findall
    private _image : Buffer | undefined;

    get image(): String {
        if (!this._image) this._image = Buffer.from(this.imageHex || '', "hex");
        return this._image.toString('base64');
    }
    

}