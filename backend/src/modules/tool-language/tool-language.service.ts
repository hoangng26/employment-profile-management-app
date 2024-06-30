import { Inject, Injectable } from '@nestjs/common';
import { TOOL_LANGUAGE_REPOSITORY } from 'src/core/constants';
import { ToolLanguageDto, UpdateToolLanguageDto } from 'src/core/dtos/tool-language.dto';
import { ToolLanguage } from 'src/core/models/tool-language.entity';

@Injectable()
export class ToolLanguageService {
  constructor(
    @Inject(TOOL_LANGUAGE_REPOSITORY)
    private readonly toolLanguageRepository: typeof ToolLanguage,
  ) {}

  async create(createToolLanguageDto: ToolLanguageDto): Promise<ToolLanguage> {
    return await this.toolLanguageRepository.create<ToolLanguage>(createToolLanguageDto, {
      returning: true,
    });
  }

  findAll() {
    return `This action returns all toolLanguage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} toolLanguage`;
  }

  async update(id: number, updateToolLanguageDto: UpdateToolLanguageDto): Promise<ToolLanguage> {
    if (!id) {
      return await this.create(updateToolLanguageDto);
    }

    return await this.toolLanguageRepository.update<ToolLanguage>(updateToolLanguageDto, {
      where: {
        id,
      },
      returning: true,
    })[0];
  }

  async removeWithPositionId(positionId: number): Promise<number> {
    return await this.toolLanguageRepository.destroy<ToolLanguage>({
      where: {
        positionId,
      },
    });
  }

  async remove(id: number) {
    return await this.toolLanguageRepository.destroy<ToolLanguage>({
      where: {
        id,
      },
    });
  }
}
