import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Partenaires')
export class PartenaireEntity {
    @PrimaryGeneratedColumn ()
    id : number ;
    @Column ({default : ''})
    name:string ;
    @Column ({default : ''})
    description:string ;
    @Column ({default : ''})
    link:string ;
    @Column({default:''})
    categorie:string;

    @Column("bytea", {nullable: true, name: "image"})
    imageHex: string;


    // affichage --> findall
    private _image : Buffer | undefined;

    get image(): String {
        if (!this._image) this._image = Buffer.from(this.imageHex || '', "hex");
        return this._image.toString('base64');
    }
}
