import { ConfigurationInterface } from '../utils/interfaces';

export const testConfiguration = (): Omit<
  ConfigurationInterface,
  'database'
> => ({
  port: 3000,
  env: 'test',
});
