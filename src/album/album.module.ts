import { Logger, Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import {Album} from './interface/album.interface';
import {MongooseModule} from '@nestjs/mongoose';
import {AlbumSchema} from './shemas/album.schema';
import {AlbumDao} from './dao/album.dao';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Album', schema: AlbumSchema}])],
  controllers: [AlbumController],
  providers: [AlbumService, Logger, AlbumDao],
})
export class AlbumModule {}
