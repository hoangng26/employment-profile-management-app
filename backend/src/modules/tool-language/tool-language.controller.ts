import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ToolLanguageDto, UpdateToolLanguageDto } from 'src/core/dtos/tool-language.dto';
import { ToolLanguageService } from './tool-language.service';

@Controller('tool-language')
export class ToolLanguageController {
  constructor(private readonly toolLanguageService: ToolLanguageService) {}

  @Post()
  create(@Body() createToolLanguageDto: ToolLanguageDto) {
    return this.toolLanguageService.create(createToolLanguageDto);
  }

  @Get()
  findAll() {
    return this.toolLanguageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toolLanguageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToolLanguageDto: UpdateToolLanguageDto) {
    return this.toolLanguageService.update(+id, updateToolLanguageDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.toolLanguageService.remove(+id);
  }
}
