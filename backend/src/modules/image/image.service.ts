import { Inject, Injectable } from '@nestjs/common';
import { excludeCRUDDateAttribute, TOOL_LANGUAGE_IMAGE_REPOSITORY } from 'src/core/constants';
import { ToolLanguageImage } from 'src/core/models/tool-language-image.entity';

@Injectable()
export class ImageService {
  constructor(
    @Inject(TOOL_LANGUAGE_IMAGE_REPOSITORY)
    private readonly tlImageRepository: typeof ToolLanguageImage,
  ) {}

  async findAll(): Promise<ToolLanguageImage[]> {
    return await this.tlImageRepository.findAll<ToolLanguageImage>({
      attributes: {
        exclude: excludeCRUDDateAttribute,
      },
    });
  }
}
