import { AlbumPhotoDto } from './album-photo.dto';
import {IsInstance, IsNotEmpty, IsOptional, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {CreateAlbumDto} from './create-album.dto';
import {ApiModelProperty, ApiModelPropertyOptional} from '@nestjs/swagger';

export class UpdateAlbumDto {
    @ApiModelPropertyOptional({ description: 'Titre de l\'album', example: 'Paysages' })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly titre?: string;

    @ApiModelPropertyOptional({ description: 'Photo de couverture de l\'album', example: 'https://visiter-voyager.info/wp-content/uploads/2019/05/paysage-nature-900x600.jpg' })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly photo?: string;

    @ApiModelPropertyOptional({ description: 'Description de l\'album', example: 'Un album qui vaut le coup' })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly description?: string;

    @ApiModelPropertyOptional({ description: 'Auteur de l\'album', example: 'Julien BAILLY' })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly auteur?: string;

    @ApiModelPropertyOptional({ description: 'Photo 0 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo0?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 1 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo1?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 2 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo2?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 3 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo3?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 4 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo4?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 5 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo5?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 6 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo6?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 7 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo7?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 8 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo8?: AlbumPhotoDto;

    @ApiModelPropertyOptional({ description: 'Photo 9 de l\'album' })
    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo9?: AlbumPhotoDto;
}
