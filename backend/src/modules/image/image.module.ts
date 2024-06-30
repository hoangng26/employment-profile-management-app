import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { imageProviders } from './image.providers';
import { ImageService } from './image.service';

@Module({
  controllers: [ImageController],
  providers: [ImageService, ...imageProviders],
})
export class ImageModule {}
