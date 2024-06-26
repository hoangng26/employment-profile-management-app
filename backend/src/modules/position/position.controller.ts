import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UpdatePositionDto } from 'src/core/dtos/position.dto';
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
  update(@Param('id') id: string, @Body() updatePositionDto: UpdatePositionDto) {
    return this.positionService.update(+id, updatePositionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.positionService.remove(+id);
  }
}
