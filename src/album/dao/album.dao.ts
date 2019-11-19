import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseDocument } from 'mongoose';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Album} from '../interface/album.interface';
import {CreateAlbumDto} from '../dto/create-album.dto';
import {UpdateAlbumDto} from '../dto/update-album.dto';

@Injectable()
export class AlbumDao {
    /**
     * Class constructor
     *
     * @param {Model<Album>} _albumModel instance of the model representing a Album
     */
    constructor(@InjectModel('Album') private readonly _albumModel: Model<Album>) {
    }

    /**
     * Call mongoose method, call toJSON on each result and returns Album[] or undefined
     *
     * @return {Observable<Album[] | void>}
     */
    find(): Observable<Album[] | void> {
        return from(this._albumModel.find({}))
            .pipe(
                map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
            );
    }

    /**
     * Returns one album of the list matching id in parameter
     *
     * @param {string} id of the album in the db
     *
     * @return {Observable<Album | void>}
     */
    findById(id: string): Observable<Album | void> {
        return from(this._albumModel.findById(id))
            .pipe(
                map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
            );
    }

    /**
     * Check if album already exists with index and add it in album list
     *
     * @param {CreateAlbumDto} album to create
     *
     * @return {Observable<Album>}
     */
    create(album: CreateAlbumDto): Observable<Album> {
        return from(this._albumModel.create(album))
            .pipe(
                map((doc: MongooseDocument) => doc.toJSON()),
            );
    }

    /**
     * Update an album in album list
     *
     * @param {string} id
     * @param {UpdateAlbumDto} album
     *
     * @return {Observable<Album | void>}
     */
    findByIdAndUpdate(id: string, album: UpdateAlbumDto): Observable<Album | void> {
        return from(this._albumModel.findByIdAndUpdate(id, album, { new: true }))
            .pipe(
                map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
            );
    }

    /**
     * Delete an album in album list
     *
     * @param {string} id
     *
     * @return {Observable<Album | void>}
     */
    findByIdAndRemove(id: string): Observable<Album | void> {
        return from(this._albumModel.findByIdAndRemove(id))
            .pipe(
                map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
            );
    }
}
