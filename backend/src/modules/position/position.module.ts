import { Module } from '@nestjs/common';
import { PositionController } from './position.controller';
import { positionProviders } from './position.providers';
import { PositionService } from './position.service';

@Module({
  controllers: [PositionController],
  providers: [PositionService, ...positionProviders],
})
export class PositionModule {}
