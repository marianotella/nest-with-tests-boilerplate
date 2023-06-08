import { Fixture } from '../../utils/interfaces';
import { Demo } from '../entities/demo.entity';

export const demoFixture: Fixture = {
  entity: Demo,
  data: [
    {
      id: 1,
      name: 'Demo 1',
      description: 'Demo 1 description',
    },
    {
      id: 2,
      name: 'Demo 2',
      description: 'Demo 2 description',
    },
  ],
};
