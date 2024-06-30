import { Injectable } from '@nestjs/common';
import { PositionResource } from 'src/core/models/position-resource.entity';

@Injectable()
export class PositionResourceService {
  create(createPositionResourceDto: PositionResource) {
    return 'This action adds a new positionResource';
  }

  findAll() {
    return `This action returns all positionResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} positionResource`;
  }

  update(id: number, updatePositionResourceDto: PositionResource) {
    return `This action updates a #${id} positionResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} positionResource`;
  }
}
