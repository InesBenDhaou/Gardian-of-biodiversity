import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('TeamMembers')
export class TeamMemberEntity {
    @PrimaryGeneratedColumn ()
    id : number ;
    @Column ({default : ''})
    name:string ;
    @Column ({default : ''})
    position:string ;
    @Column({default : ''})
    twitterLink:string ;
    @Column({default : ''})
    facebookLink:string ;
    @Column({default : ''})
    instagramLink:string ;
    @Column({default : ''})
    linkedinLink:string ;

    @Column("bytea", {nullable: true, name: "image"})
    imageHex: string;


    // affichage --> findall
    private _image : Buffer | undefined;

    get image(): String {
        if (!this._image) this._image = Buffer.from(this.imageHex || '', "hex");
        return this._image.toString('base64');
    }
}
