import { Module } from '@nestjs/common';
import { PositionResourceService } from './position-resource.service';
import { PositionResourceController } from './position-resource.controller';

@Module({
  controllers: [PositionResourceController],
  providers: [PositionResourceService],
})
export class PositionResourceModule {}
