import { Provider } from '@nestjs/common';
import { TOOL_LANGUAGE_IMAGE_REPOSITORY } from 'src/core/constants';
import { ToolLanguageImage } from 'src/core/models/tool-language-image.entity';

export const imageProviders: Provider[] = [
  {
    provide: TOOL_LANGUAGE_IMAGE_REPOSITORY,
    useValue: ToolLanguageImage,
  },
];
