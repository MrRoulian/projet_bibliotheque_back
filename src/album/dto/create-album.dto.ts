import { AlbumPhotoDto } from './album-photo.dto';
import {isString} from '@nestjs/common/utils/shared.utils';
import {IsInstance, IsNotEmpty, IsOptional, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {ApiModelProperty, ApiModelPropertyOptional} from '@nestjs/swagger';

export class CreateAlbumDto {

    @ApiModelProperty({ description: 'Titre de l\'album', example: 'Paysages' })
    @IsString()
    @IsNotEmpty()
    titre: string;

    @ApiModelPropertyOptional({ description: 'Photo de couverture de l\'album', example: 'http://photo.com/paysage.jpg' })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    photo?: string;

    @ApiModelPropertyOptional({ description: 'Description de l\'album', example: 'Un album qui vaut le coup' })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description?: string;

    @ApiModelPropertyOptional({ description: 'Auteur de l\'album', example: 'Julien BAILLY' })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    auteur?: string;

    @ApiModelPropertyOptional({ description: 'Photo 0 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    photo0?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 1 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    photo1?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 2 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    photo2?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 3 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    photo3?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 4 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    photo4?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 5 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    photo5?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 6 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    photo6?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 7 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    photo7?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 8 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    photo8?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 9 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    photo9?: AlbumPhotoDto;
}
