import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { testConfiguration } from './test.configuration';
import { Demo } from '../demo/entities/demo.entity';

const ENTITIES = [Demo];

export async function createTestingModule(): Promise<DynamicModule[]> {
  return [
    ConfigModule.forRoot({ load: [testConfiguration] }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      autoLoadEntities: true,
      dropSchema: true,
      synchronize: true,
      entities: ENTITIES,
    }),
    TypeOrmModule.forFeature(ENTITIES),
  ];
}
