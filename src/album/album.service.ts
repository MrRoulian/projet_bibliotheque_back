import {Injectable, Logger, NotFoundException, UnprocessableEntityException} from '@nestjs/common';
import {Album, Photo} from './interface/album.interface';
import { ALBUM } from '../data/album';
import {from, Observable, of, throwError} from 'rxjs';
import {catchError, find, findIndex, flatMap, map, tap} from 'rxjs/operators';
import {AlbumEntity} from './entities/album.entity';
import {CreateAlbumDto} from './dto/create-album.dto';
import {UpdateAlbumDto} from './dto/update-album.dto';
import {AlbumDao} from './dao/album.dao';

@Injectable()
export class AlbumService {

    private _album: Album[];

    /**
     * Class constructor
     */
    constructor(private readonly _albumDao: AlbumDao) {
        this._album = [].concat(ALBUM);
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
        return from(this._addAlbum(album));
    }

    /**
     * Add album with good data in album list
     *
     * @param album to add
     *
     * @returns {Observable<AlbumEntity>}
     *
     * @private
     */
    private _addAlbum(album: CreateAlbumDto): Observable<AlbumEntity> {
        return of(album)
            .pipe(
                map(_ =>
                    Object.assign(_, {
                        id: this._createId(),
                    }) as Album,
                ),
                tap(_ => this._album = this._album.concat(_)),
                map(_ => new AlbumEntity(_)),
            );
    }

    /**
     * Creates a new id
     *
     * @returns {string}
     *
     * @private
     */
    private _createId(): string {
        return `${new Date().getTime()}`;
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
        return this._findAlbumIndexOfList(id)
            .pipe(
                tap(_ => Object.assign(this._album[ _ ], album)),
                map(_ => new AlbumEntity(this._album[ _ ])),
            );
    }

    /**
     * Finds index of array for current album
     *
     * @param {string} id of the album to find
     *
     * @returns {Observable<number>}
     *
     * @private
     */
    private _findAlbumIndexOfList(id: string): Observable<number> {
        return from(this._album)
            .pipe(
                findIndex(_ => _.id === id),
                flatMap(_ => _ > -1 ?
                    of(_) :
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
        return this._findAlbumIndexOfList(id)
            .pipe(
                tap(_ => this._album.splice(_, 1)),
                map(() => undefined),
            );
    }
}
