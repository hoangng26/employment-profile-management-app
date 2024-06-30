import { Provider } from '@nestjs/common';
import { POSITION_REPOSITORY, POSITION_RESOURCE_REPOSITORY } from 'src/core/constants';
import { PositionResource } from 'src/core/models/position-resource.entity';
import { Position } from 'src/core/models/position.entity';

export const positionProviders: Provider[] = [
  {
    provide: POSITION_REPOSITORY,
    useValue: Position,
  },
  {
    provide: POSITION_RESOURCE_REPOSITORY,
    useValue: PositionResource,
  },
];
