import {Body, Controller, Delete, Get, Logger, Param, Post, Put} from '@nestjs/common';
import {Observable, of} from 'rxjs';
import {AlbumService} from './album.service';
import {ApiNoContentResponse, ApiOkResponse} from '@nestjs/swagger';
import {Album} from './interface/album.interface';
import {AlbumEntity} from './entities/album.entity';
import {CreateAlbumDto} from './dto/create-album.dto';
import {UpdateAlbumDto} from './dto/update-album.dto';

@Controller('album')
export class AlbumController {

    /**
     * Class constructor
     * @param _albumService
     */
    // tslint:disable-next-line:variable-name
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
     * Handler to answer to /album/:id route
     *
     * @returns Observable<Album>
     */
    @Get(':id')
    findOne(@Param('id') id: string): Observable<Album> {
        return this._albumService.findOne(id);
    }

    /**
     * Handler to answer to POST /album route
     *
     * @param createAlbumDto
     *
     * @returns Observable<Album>
     */
    @Post()
    create(@Body() createAlbumDto: CreateAlbumDto): Observable<Album> {
        return this._albumService.create(createAlbumDto);
    }

    /**
     * Handler to answer to PUT /album route
     *
     * @param id
     * @param updateAlbumDto
     *
     * @returns Observable<Album>
     */
    @Put(':id')
    update(@Param('id') id: string, @Body() updateAlbumDto: UpdateAlbumDto): Observable<Album> {
        return this._albumService.update(id, updateAlbumDto);
    }

    /**
     * Handler to answer to DELETE /ablum/:id route
     *
     * @param {string} id of the album to delete
     *
     * @returns Observable<void>
     */
    @Delete(':id')
    delete(@Param('id') id: string): Observable<void> {
        return this._albumService.delete(id);
    }
}
