import {IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class AlbumPhotoDto {
    @IsString()
    @IsNotEmpty()
    readonly path: string;

    @IsString()
    @IsNotEmpty()
    readonly titre: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly description?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly auteur?: string;
}
