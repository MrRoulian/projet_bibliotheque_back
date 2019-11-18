import {Exclude, Expose, Type} from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';
import {Photo} from '../interface/album.interface';
import {AlbumPhotoEntity} from './album-photo.entity';

@Exclude()
export class AlbumEntity {
    @ApiModelProperty({ description: 'Unique identifier in the database', example: '5763cd4dc378a38ecd387737' })
    @Expose()
    @Type(() => String)
    id: string;

    @ApiModelProperty({ description: 'Titre de l\'album', example: 'Paysages' })
    @Expose()
    @Type(() => String)
    titre: string;

    @ApiModelProperty({ description: 'Photo URL', example: 'https://randomuser.me/portraits/men/55.jpg' })
    @Expose()
    @Type(() => String)
    photo: string;

    @ApiModelProperty({ description: 'Description d\' album', example: 'Contient de belles photos' })
    @Expose()
    @Type(() => String)
    description: string;

    @ApiModelProperty({ description: 'Auteur de l\'album', example: 'Julien BAILLY' })
    @Expose()
    @Type(() => String)
    auteur: string;

    @ApiModelProperty({ description: 'Photo0'})
    @Expose()
    @Type(() => AlbumPhotoEntity)
    photo0: AlbumPhotoEntity;

    @ApiModelProperty({ description: 'Photo1'})
    @Expose()
    @Type(() => AlbumPhotoEntity)
    photo1: AlbumPhotoEntity;

    @ApiModelProperty({ description: 'Photo2'})
    @Expose()
    @Type(() => AlbumPhotoEntity)
    photo2: AlbumPhotoEntity;

    @ApiModelProperty({ description: 'Photo3'})
    @Expose()
    @Type(() => AlbumPhotoEntity)
    photo3: AlbumPhotoEntity;

    @ApiModelProperty({ description: 'Photo4'})
    @Expose()
    @Type(() => AlbumPhotoEntity)
    photo4: AlbumPhotoEntity;

    @ApiModelProperty({ description: 'Photo5'})
    @Expose()
    @Type(() => AlbumPhotoEntity)
    photo5: AlbumPhotoEntity;

    @ApiModelProperty({ description: 'Photo6'})
    @Expose()
    @Type(() => AlbumPhotoEntity)
    photo6: AlbumPhotoEntity;

    @ApiModelProperty({ description: 'Photo7'})
    @Expose()
    @Type(() => AlbumPhotoEntity)
    photo7: AlbumPhotoEntity;

    @ApiModelProperty({ description: 'Photo8'})
    @Expose()
    @Type(() => AlbumPhotoEntity)
    photo8: AlbumPhotoEntity;

    @ApiModelProperty({ description: 'Photo9'})
    @Expose()
    @Type(() => AlbumPhotoEntity)
    photo9: AlbumPhotoEntity;



    /**
     * Class constructor
     *
     * @param partial data to insert in object instance
     */
    constructor(partial: Partial<AlbumEntity>) {
        Object.assign(this, partial);
    }
}
