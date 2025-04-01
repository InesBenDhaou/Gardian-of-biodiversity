import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Events')
export class EventEntity {
    @PrimaryGeneratedColumn ()
    id : number ;
    @Column ({default : ''})
    title:string ;
    @Column ({ type: 'timestamp'})
    date: Date;
    @Column ({default : ''})
    place:string ;
    @Column({default:''})
    projet:string;
    @Column({default:''})
    content:string;

    @Column("bytea", {nullable: true, name: "image"})
    imageHex: string;


    // affichage --> findall
    private _image : Buffer | undefined;

    get image(): String {
        if (!this._image) this._image = Buffer.from(this.imageHex || '', "hex");
        return this._image.toString('base64');
    }
}
