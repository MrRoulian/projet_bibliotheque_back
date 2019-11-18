import { AlbumPhotoDto } from './album-photo.dto';
import {IsInstance, IsNotEmpty, IsOptional, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {CreateAlbumDto} from './create-album.dto';

export class UpdateAlbumDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly titre?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly photo?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly description?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly auteur?: string;

    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo0?: AlbumPhotoDto;

    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo1?: AlbumPhotoDto;

    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo2?: AlbumPhotoDto;

    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo3?: AlbumPhotoDto;

    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo4?: AlbumPhotoDto;

    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo5?: AlbumPhotoDto;

    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo6?: AlbumPhotoDto;

    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo7?: AlbumPhotoDto;

    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo8?: AlbumPhotoDto;

    @IsOptional()
    @IsInstance(AlbumPhotoDto)
    @ValidateNested()
    @Type(() => AlbumPhotoDto)
    readonly photo9?: AlbumPhotoDto;
}
