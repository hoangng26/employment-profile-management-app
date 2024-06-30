import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PositionResource } from 'src/core/models/position-resource.entity';
import { PositionResourceService } from './position-resource.service';

@Controller('position-resource')
export class PositionResourceController {
  constructor(private readonly positionResourceService: PositionResourceService) {}

  @Post()
  create(@Body() createPositionResourceDto: PositionResource) {
    return this.positionResourceService.create(createPositionResourceDto);
  }

  @Get()
  findAll() {
    return this.positionResourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.positionResourceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePositionResourceDto: PositionResource) {
    return this.positionResourceService.update(+id, updatePositionResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.positionResourceService.remove(+id);
  }
}
