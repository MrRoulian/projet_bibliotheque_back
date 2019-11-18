import {IsNotEmpty, IsOptional, IsString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class AlbumPhotoDto {
    @ApiModelProperty({ description: 'url de l\'image', example: 'https://randomuser.me/portraits/men/55.jpg' })
    @IsString()
    @IsNotEmpty()
    readonly path: string;

    @ApiModelProperty({ description: 'Titre de l\'image', example: 'Chat.png' })
    @IsString()
    @IsNotEmpty()
    readonly titre: string;

    @ApiModelProperty({ description: 'Description de l\'image', example: 'Un chat noir' })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly description?: string;

    @ApiModelProperty({ description: 'Auteur de l\'image', example: 'Julien BAILLY' })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly auteur?: string;
}
