import {Injectable, Logger, NotFoundException} from '@nestjs/common';
import {Album} from './interface/album.interface';
import { ALBUM } from '../data/album';
import {from, Observable, of, throwError} from 'rxjs';
import {find, flatMap, map} from 'rxjs/operators';
import {AlbumEntity} from './entities/album.entity';

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
}
