import { Inject, Injectable } from '@nestjs/common';
import { excludeCRUDDateAttribute, POSITION_REPOSITORY, POSITION_RESOURCE_REPOSITORY } from 'src/core/constants';
import { PositionDto, UpdatePositionDto } from 'src/core/dtos/position.dto';
import { PositionResource } from 'src/core/models/position-resource.entity';
import { Position } from 'src/core/models/position.entity';
import { ToolLanguageResource } from 'src/core/models/tool-language-resource.entity';
import { ToolLanguageService } from '../tool-language/tool-language.service';

@Injectable()
export class PositionService {
  constructor(
    @Inject(POSITION_RESOURCE_REPOSITORY)
    private readonly positionResourceRepository: typeof PositionResource,
    @Inject(POSITION_REPOSITORY)
    private readonly positionRepository: typeof Position,
    private readonly toolLanguageService: ToolLanguageService,
  ) {}

  async create(createPositionDto: PositionDto) {
    const { toolLanguages, ...positionDto } = createPositionDto;
    const position = await this.positionRepository.create<Position>(positionDto);
    await Promise.all(
      toolLanguages.map((item) =>
        this.toolLanguageService.create({
          ...item,
          positionId: position.id,
        }),
      ),
    );
    return position;
  }

  findAll() {
    return `This action returns all position`;
  }

  findOne(id: number) {
    return `This action returns a #${id} position`;
  }

  async update(id: number, updatePositionDto: UpdatePositionDto): Promise<Position> {
    const { toolLanguages, ...positionDto } = updatePositionDto;
    if (!id) {
      return await this.create(updatePositionDto);
    }

    await Promise.all(toolLanguages.map((item) => this.toolLanguageService.update(item.id, item)));

    return await this.positionRepository.update<Position>(positionDto, {
      where: {
        id,
      },
      returning: true,
    })[0];
  }

  async remove(id: number) {
    await this.toolLanguageService.removeWithPositionId(id);

    return await this.positionRepository.destroy<Position>({
      where: {
        id,
      },
    });
  }

  async removeWithEmployeeId(employeeId: number): Promise<number> {
    const positions = await this.positionRepository.findAll<Position>({
      where: {
        employeeId,
      },
    });

    await Promise.all(positions.map((item) => this.toolLanguageService.removeWithPositionId(item.id)));

    return await this.positionRepository.destroy<Position>({
      where: {
        employeeId,
      },
    });
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
