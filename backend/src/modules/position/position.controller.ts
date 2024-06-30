import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Position } from 'src/core/models/position.entity';
import { PositionService } from './position.service';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Post()
  create(@Body() createPositionDto: Position) {
    return this.positionService.create(createPositionDto);
  }

  @Get('resource')
  async getResource() {
    return await this.positionService.getResource();
  }

  @Get()
  findAll() {
    return this.positionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.positionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePositionDto: Position) {
    return this.positionService.update(+id, updatePositionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.positionService.remove(+id);
  }
}
