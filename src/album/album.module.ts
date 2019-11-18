import {Get, Logger, Module} from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import {Observable} from 'rxjs';
import {Album} from './interface/album.interface';

@Module({
  controllers: [AlbumController],
  providers: [AlbumService, Logger],
})
export class AlbumModule {}
