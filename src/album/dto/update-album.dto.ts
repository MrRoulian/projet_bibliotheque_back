import { AlbumPhotoDto } from './album-photo.dto';

export class UpdateAlbumDto {
    readonly id?: string;
    readonly titre?: string;
    readonly photo?: string;
    readonly description?: string;
    readonly auteur?: string;
    readonly photos?: AlbumPhotoDto[];
}
