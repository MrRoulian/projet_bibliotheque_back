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
    auteur?: string;

    @ApiModelProperty({ description: 'Liste des photos', example: 'photo1.jpg, photo2.jpg, photo3.jpg' })
    @Expose()
    @Type(() => AlbumPhotoEntity)
    photos: Photo[];

    /**
     * Class constructor
     *
     * @param partial data to insert in object instance
     */
    constructor(partial: Partial<AlbumEntity>) {
        Object.assign(this, partial);
    }
}
