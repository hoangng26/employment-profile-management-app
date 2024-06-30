import { Provider } from '@nestjs/common';
import { TOOL_LANGUAGE_REPOSITORY, TOOL_LANGUAGE_RESOURCE_REPOSITORY } from 'src/core/constants';
import { ToolLanguageResource } from 'src/core/models/tool-language-resource.entity';
import { ToolLanguage } from 'src/core/models/tool-language.entity';

export const toolLanguageProviders: Provider[] = [
  {
    provide: TOOL_LANGUAGE_REPOSITORY,
    useValue: ToolLanguage,
  },
  {
    provide: TOOL_LANGUAGE_RESOURCE_REPOSITORY,
    useValue: ToolLanguageResource,
  },
];
