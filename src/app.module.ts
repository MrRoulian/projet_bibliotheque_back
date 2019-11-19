import { Module } from '@nestjs/common';
import { AlbumModule } from './album/album.module';
import {MongooseModule, MongooseModuleOptions} from '@nestjs/mongoose';
import * as Config from 'config';

@Module({
  imports: [
      AlbumModule,
      MongooseModule.forRoot(Config.get<string>('mongodb.uri'), Config.get<MongooseModuleOptions>('mongodb.options')),
  ],
})
export class AppModule {}
