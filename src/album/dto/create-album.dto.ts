import { AlbumPhotoDto } from './album-photo.dto';
import {isString} from '@nestjs/common/utils/shared.utils';
import {IsInstance, IsNotEmpty, IsOptional, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {ApiModelProperty} from '@nestjs/swagger';

export class CreateAlbumDto {

    @ApiModelProperty({ description: 'Titre de l\'album', example: 'Paysages' })
    @IsString()
    @IsNotEmpty()
    readonly titre: string;

    @ApiModelProperty({ description: 'Photo de couverture de l\'album', example: 'http://photo.com/paysage.jpg' })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly photo?: string;

    @ApiModelProperty({ description: 'Description de l\'album', example: 'Un album qui vaut le coup' })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly description?: string;

    @ApiModelProperty({ description: 'Auteur de l\'album', example: 'Julien BAILLY' })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly auteur?: string;

    @ApiModelProperty({ description: 'Photo 0 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo0?: AlbumPhotoDto;

    @ApiModelProperty({ description: 'Photo 1 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo1?: AlbumPhotoDto;

    @ApiModelProperty({ description: 'Photo 2 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo2?: AlbumPhotoDto;

    @ApiModelProperty({ description: 'Photo 3 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo3?: AlbumPhotoDto;

    @ApiModelProperty({ description: 'Photo 4 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo4?: AlbumPhotoDto;

    @ApiModelProperty({ description: 'Photo 5 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo5?: AlbumPhotoDto;

    @ApiModelProperty({ description: 'Photo 6 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo6?: AlbumPhotoDto;

    @ApiModelProperty({ description: 'Photo 7 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo7?: AlbumPhotoDto;

    @ApiModelProperty({ description: 'Photo 8 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo8?: AlbumPhotoDto;

    @ApiModelProperty({ description: 'Photo 9 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo9?: AlbumPhotoDto;
}
