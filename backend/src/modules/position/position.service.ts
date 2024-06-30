import { Inject, Injectable } from '@nestjs/common';
import { excludeCRUDDateAttribute, POSITION_RESOURCE_REPOSITORY } from 'src/core/constants';
import { PositionResource } from 'src/core/models/position-resource.entity';
import { Position } from 'src/core/models/position.entity';
import { ToolLanguageResource } from 'src/core/models/tool-language-resource.entity';

@Injectable()
export class PositionService {
  constructor(
    @Inject(POSITION_RESOURCE_REPOSITORY)
    private readonly positionResourceRepository: typeof PositionResource,
  ) {}

  create(createPositionDto: Position) {
    return 'This action adds a new position';
  }

  findAll() {
    return `This action returns all position`;
  }

  findOne(id: number) {
    return `This action returns a #${id} position`;
  }

  update(id: number, updatePositionDto: Position) {
    return `This action updates a #${id} position`;
  }

  remove(id: number) {
    return `This action removes a #${id} position`;
  }

  async getResource() {
    return await this.positionResourceRepository.findAll<PositionResource>({
      attributes: {
        exclude: excludeCRUDDateAttribute,
      },
      include: [
        {
          model: ToolLanguageResource,
          attributes: {
            exclude: excludeCRUDDateAttribute,
          },
          separate: true,
          order: ['id'],
        },
      ],
    });
  }
}
