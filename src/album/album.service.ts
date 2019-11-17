import {Injectable, Logger, NotFoundException} from '@nestjs/common';
import {Album, Photo} from './interface/album.interface';
import { ALBUM } from '../data/album';
import {from, Observable, of, throwError} from 'rxjs';
import {find, findIndex, flatMap, map, tap} from 'rxjs/operators';
import {AlbumEntity} from './entities/album.entity';
import {CreateAlbumDto} from './dto/create-album.dto';
import {UpdateAlbumDto} from './dto/update-album.dto';

@Injectable()
export class AlbumService {

    private _album: Album[];

    /**
     * Class constructor
     */
    constructor() {
        this._album = [].concat(ALBUM).map(album => album);
    }

    /**
     * Returns all existing album in the list
     *
     * @returns {Observable<Album[] | void>}
     */
    findAll(): Observable<Album[] | void> {
        return of(this._album)
            .pipe(
                map(_ => (!!_ && !!_.length) ? _ : undefined),
            );
    }

    /**
     * Returns one album of the list matching id in parameter
     *
     * @param {string} id of the album
     *
     * @returns {Observable<Album>}
     */
    findOne(id: string): Observable<Album> {
        return from(this._album)
            .pipe(
                find(_ => _.id === id),
                flatMap(_ =>
                    !!_ ?
                        of(_) :
                        throwError(new NotFoundException(`Album with id '${id}' not found`)),
                ),
            );
    }

    /**
     * (Check if album already exists and add it in album list)
     *
     * @param album to create
     *
     * @returns {Observable<Album>}
     */
    create(album: CreateAlbumDto): Observable<Album> {
        return from(this._addAlbum(album));
    }

    /**
     * Add album with good data in album list
     *
     * @param album to add
     *
     * @returns {Observable<Album>}
     *
     * @private
     */
    private _addAlbum(album: CreateAlbumDto): Observable<Album> {
        return of(album)
            .pipe(
                map(_ =>
                    Object.assign(_, {
                        id: this._createId(),
                    }) as Album,
                ),
                tap(_ => this._album = this._album.concat(_)),
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
     * @returns {Observable<Album>}
     */
    update(id: string, album: UpdateAlbumDto): Observable<Album> {
        return this._findAlbumIndexOfList(id)
            .pipe(
                tap(_ => Object.assign(this._album[ _ ], album)),
                map(_ => this._album[ _ ]),
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
