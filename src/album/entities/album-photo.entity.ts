import {Exclude, Expose, Type} from 'class-transformer';
import {ApiModelProperty, ApiModelPropertyOptional} from '@nestjs/swagger';

@Exclude()
export class AlbumPhotoEntity {
    @ApiModelPropertyOptional({ description: 'Titre de la photo', example: 'Chat.jpg' })
    @Expose()
    @Type(() => String)
    titre?: string;

    @ApiModelPropertyOptional({ description: 'Photo URL', example: 'https://visiter-voyager.info/wp-content/uploads/2019/05/paysage-nature-900x600.jpg' })
    @Expose()
    @Type(() => String)
    path?: string;

    @ApiModelPropertyOptional({ description: 'Description de la photo', example: 'Photo de chat' })
    @Expose()
    @Type(() => String)
    description?: string;

    @ApiModelPropertyOptional({ description: 'Auteur de la photo', example: 'Julien BAILLY' })
    @Expose()
    @Type(() => String)
    auteur?: string;
}
