import {Exclude, Expose, Type} from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

@Exclude()
export class AlbumPhotoEntity {
    @ApiModelProperty({ description: 'Titre de la photo', example: 'Chat.jpg' })
    @Expose()
    @Type(() => String)
    titre: string;

    @ApiModelProperty({ description: 'Photo URL', example: 'https://randomuser.me/portraits/men/55.jpg' })
    @Expose()
    @Type(() => String)
    path: string;

    @ApiModelProperty({ description: 'Description de la photo', example: 'Photo de chat' })
    @Expose()
    @Type(() => String)
    description: string;

    @ApiModelProperty({ description: 'Auteur de la photo', example: 'Julien BAILLY' })
    @Expose()
    @Type(() => String)
    auteur: string;
}
