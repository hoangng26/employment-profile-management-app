import { Module } from '@nestjs/common';
import { ToolLanguageController } from './tool-language.controller';
import { toolLanguageProviders } from './tool-language.providers';
import { ToolLanguageService } from './tool-language.service';

@Module({
  controllers: [ToolLanguageController],
  providers: [ToolLanguageService, ...toolLanguageProviders],
  exports: [ToolLanguageService],
})
export class ToolLanguageModule {}
