import {Injectable, NotFoundException, UnprocessableEntityException} from '@nestjs/common';
import {Observable, of, throwError} from 'rxjs';
import {catchError, flatMap, map} from 'rxjs/operators';
import {AlbumEntity} from './entities/album.entity';
import {CreateAlbumDto} from './dto/create-album.dto';
import {UpdateAlbumDto} from './dto/update-album.dto';
import {AlbumDao} from './dao/album.dao';

@Injectable()
export class AlbumService {

    /**
     * Class constructor
     */
    constructor(private readonly _albumDao: AlbumDao) {
    }

    /**
     * Returns all existing album in the list
     *
     * @returns {Observable<AlbumEntity[] | void>}
     */
    findAll(): Observable<AlbumEntity[] | void> {
        return this._albumDao.find()
            .pipe(
                map(_ => !!_ ? _.map(__ => new AlbumEntity(__)) : undefined),
            );
    }

    /**
     * Returns one album of the list matching id in parameter
     *
     * @param {string} id of the album
     *
     * @returns {Observable<AlbumEntity>}
     */
    findOne(id: string): Observable<AlbumEntity> {
        return this._albumDao.findById(id)
            .pipe(
                catchError(e => throwError(new UnprocessableEntityException(e.message))),
                flatMap(_ =>
                    !!_ ?
                        of(new AlbumEntity(_)) :
                        throwError(new NotFoundException(`Album with id '${id}' not found`)),
                ),
            );
    }

    /**
     * (Check if album already exists and add it in album list)
     *
     * @param album to create
     *
     * @returns {Observable<AlbumEntity>}
     */
    create(album: CreateAlbumDto): Observable<AlbumEntity> {
        return of(album)
            .pipe(
                flatMap(_ => this._albumDao.create(_)),
                map(_ => new AlbumEntity(_)),
            );
    }

    /**
     * Update an album in album list
     *
     * @param {string} id of the album to update
     * @param album data to update
     *
     * @returns {Observable<AlbumEntity>}
     */
    update(id: string, album: UpdateAlbumDto): Observable<AlbumEntity> {
        return this._albumDao.findByIdAndUpdate(id, album)
            .pipe(
                flatMap(_ => !!_ ?
                    of(new AlbumEntity((_))) :
                    throwError(new NotFoundException(`Album with id '${id}' not found`)),
                ),
            );
    }

    /**
     * Deletes one album in album list
     *
     * @param {string} id of the album to delete
     *
     * @returns {Observable<void>}
     */
    delete(id: string): Observable<void> {
        return this._albumDao.findByIdAndRemove(id)
            .pipe(
                catchError(e => throwError(new NotFoundException(e.message))),
                flatMap(_ => !!_ ?
                    of(undefined) :
                    throwError(new NotFoundException(`Album with id '${id}' not found`)),
                ),
            );
    }
}
