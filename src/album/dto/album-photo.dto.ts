import {IsNotEmpty, IsOptional, IsString} from 'class-validator';
import {ApiModelProperty, ApiModelPropertyOptional} from '@nestjs/swagger';

export class AlbumPhotoDto {
    @ApiModelProperty({ description: 'url de l\'image', example: 'https://randomuser.me/portraits/men/55.jpg' })
    @IsString()
    @IsNotEmpty()
    path: string;

    @ApiModelProperty({ description: 'Titre de l\'image', example: 'Chat.png' })
    @IsString()
    @IsNotEmpty()
    titre: string;

    @ApiModelPropertyOptional({ description: 'Description de l\'image', example: 'Un chat noir' })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description?: string;

    @ApiModelPropertyOptional({ description: 'Auteur de l\'image', example: 'Julien BAILLY' })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    auteur?: string;
}
