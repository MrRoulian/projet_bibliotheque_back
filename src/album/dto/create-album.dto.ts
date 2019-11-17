import { AlbumPhotoDto } from './album-photo.dto';

export class CreateAlbumDto {
    readonly id: string;
    readonly titre: string;
    readonly photo: string;
    readonly description?: string;
    readonly auteur?: string;
    readonly photo0?: AlbumPhotoDto;
    readonly photo1?: AlbumPhotoDto;
    readonly photo2?: AlbumPhotoDto;
    readonly photo3?: AlbumPhotoDto;
    readonly photo4?: AlbumPhotoDto;
    readonly photo5?: AlbumPhotoDto;
    readonly photo6?: AlbumPhotoDto;
    readonly photo7?: AlbumPhotoDto;
    readonly photo8?: AlbumPhotoDto;
    readonly photo9?: AlbumPhotoDto;
}
