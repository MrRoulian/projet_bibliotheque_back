import {Controller, Get, Logger, Param} from '@nestjs/common';
import {Observable, of} from 'rxjs';
import {AlbumService} from './album.service';
import {ApiNoContentResponse, ApiOkResponse} from '@nestjs/swagger';
import {Album} from './interface/album.interface';
import {AlbumEntity} from './entities/album.entity';

@Controller('album')
export class AlbumController {

    /**
     * Class constructor
     * @param _albumService
     */
    constructor(private readonly _albumService: AlbumService) {
    }

    /**
     * Handler to answer to GET /album route
     *
     * @returns Observable<AlbumEntity[] | void>
     */
    // @ApiOkResponse({ description: 'Returns an array of album', type: AlbumEntity, isArray: true })
    @ApiNoContentResponse({ description: 'No album exists in database' })
    @Get()
    findAll(): Observable<Album[] | void> {
        return this._albumService.findAll();
    }

    /**
     * Handler to answer to /people/:id route
     *
     * @returns Observable<Person>
     */
    @Get(':id')
    findOne(@Param('id') id: string): Observable<Album> {
        return this._albumService.findOne(id);
    }
}
