import {Body, ClassSerializerInterceptor, Controller, Delete, Get, Logger, Param, Post, Put, UseInterceptors} from '@nestjs/common';
import {Observable} from 'rxjs';
import {AlbumService} from './album.service';
import {
    ApiBadRequestResponse, ApiConflictResponse,
    ApiCreatedResponse,
    ApiImplicitBody,
    ApiImplicitParam,
    ApiNoContentResponse,
    ApiNotFoundResponse,
    ApiOkResponse, ApiUseTags,
} from '@nestjs/swagger';
import {AlbumEntity} from './entities/album.entity';
import {CreateAlbumDto} from './dto/create-album.dto';
import {UpdateAlbumDto} from './dto/update-album.dto';
import {HandlerParams} from './validators/handler-params';
import {AlbumInterceptor} from './interceptors/album-interceptor';

@ApiUseTags('album')
@Controller('album')
@UseInterceptors(ClassSerializerInterceptor)
@UseInterceptors(AlbumInterceptor)
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
    @ApiOkResponse({ description: 'Retourne la liste des albums', type: AlbumEntity, isArray: true })
    @ApiNoContentResponse({ description: 'Aucun album dans la base de donnees' })
    @Get()
    findAll(): Observable<AlbumEntity[] | void> {
        return this._albumService.findAll();
    }

    /**
     * Handler to answer to /album/:id route
     *
     * @returns Observable<AlbumEntity>
     */
    @ApiOkResponse({ description: 'Retourne l\'album avec le bon "id"', type: AlbumEntity })
    @ApiNotFoundResponse({ description: 'Aucun album n\'existe dans a base de donnees avec cet "id"' })
    @ApiBadRequestResponse({ description: 'Parametre incorect' })
    @ApiImplicitParam({ name: 'id', description: 'Unique identifiant d\'album dans la base de donnees', type: String })
    @Get(':id')
    findOne(@Param() params: HandlerParams): Observable<AlbumEntity> {
        return this._albumService.findOne(params.id);
    }

    /**
     * Handler to answer to POST /album route
     *
     * @param createAlbumDto
     *
     * @returns Observable<AlbumEntity>
     */
    @ApiCreatedResponse({ description: 'Album creer avec succes', type: AlbumEntity })
    @ApiBadRequestResponse({ description: 'Body incorect' })
    @ApiImplicitBody({ name: 'CreateAlbumDto', description: 'Body pour creer l\'album', type: CreateAlbumDto })
    @Post()
    create(@Body() createAlbumDto: CreateAlbumDto): Observable<AlbumEntity> {
        return this._albumService.create(createAlbumDto);
    }

    /**
     * Handler to answer to PUT /album route
     *
     * @param {HandlerParams} params list of route params to take album id
     * @param updateAlbumDto
     *
     * @returns Observable<AlbumEntity>
     */
    @ApiOkResponse({ description: 'Album modifie avec succes', type: AlbumEntity })
    @ApiNotFoundResponse({ description: 'L\'album avec cet id n\'existe pas dans la base de donnees' })
    @ApiBadRequestResponse({ description: 'Parametre ou body incorect' })
    @ApiImplicitParam({ name: 'id', description: 'Unique identifiant d\'album dans la base de donnees', type: String })
    @ApiImplicitBody({ name: 'UpdateAlbumDto', description: 'Body a applique sur l\'album', type: UpdateAlbumDto })
    @Put(':id')
    update(@Param() params: HandlerParams, @Body() updateAlbumDto: UpdateAlbumDto): Observable<AlbumEntity> {
        return this._albumService.update(params.id, updateAlbumDto);
    }

    /**
     * Handler to answer to DELETE /ablum/:id route
     *
     * @param {HandlerParams} params list of route params to take album id
     *
     * @returns Observable<void>
     */
    @ApiNoContentResponse({ description: 'Album supprime avec succes' })
    @ApiNotFoundResponse({ description: 'L\'album avec cet id n\'existe pas dans la base de donnees' })
    @ApiBadRequestResponse({ description: 'Parametre incorect' })
    @ApiImplicitParam({ name: 'id', description: 'Unique identifiant d\'album dans la base de donnees', type: String })
    @Delete(':id')
    delete(@Param() params: HandlerParams): Observable<void> {
        return this._albumService.delete(params.id);
    }
}
