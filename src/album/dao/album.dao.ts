import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseDocument } from 'mongoose';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Album} from '../interface/album.interface';

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
}
