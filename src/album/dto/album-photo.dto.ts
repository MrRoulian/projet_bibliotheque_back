import {IsNotEmpty, IsOptional, IsString} from 'class-validator';
import {ApiModelProperty, ApiModelPropertyOptional} from '@nestjs/swagger';

export class AlbumPhotoDto {
    @ApiModelProperty({ description: 'url de l\'image', example: 'https://visiter-voyager.info/wp-content/uploads/2019/05/paysage-nature-900x600.jpg' })
    @IsOptional()
    @IsString()
    path: string;

    @ApiModelProperty({ description: 'Titre de l\'image', example: 'Chat.png' })
    @IsOptional()
    @IsString()
    titre: string;

    @ApiModelPropertyOptional({ description: 'Description de l\'image', example: 'Un chat noir' })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiModelPropertyOptional({ description: 'Auteur de l\'image', example: 'Julien BAILLY' })
    @IsOptional()
    @IsString()
    auteur?: string;
}
