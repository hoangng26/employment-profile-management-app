import { Module } from '@nestjs/common';
import { ToolLanguageModule } from '../tool-language/tool-language.module';
import { PositionController } from './position.controller';
import { positionProviders } from './position.providers';
import { PositionService } from './position.service';

@Module({
  imports: [ToolLanguageModule],
  controllers: [PositionController],
  providers: [PositionService, ...positionProviders],
  exports: [PositionService],
})
export class PositionModule {}
