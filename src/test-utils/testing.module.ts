import { Test, TestingModule } from '@nestjs/testing';
import { createTestingModule } from './test.utils';
import { ModuleMetadata } from '@nestjs/common';
import { TypeOrmHelper } from './type-orm.helper';
import { Fixture } from '../utils/interfaces';

interface TestingModuleOptions extends ModuleMetadata {
  fixtures?: Fixture[];
}

export const testingModule = async ({
  imports,
  providers,
  controllers,
  exports,
  fixtures,
}: TestingModuleOptions): Promise<TestingModule> => {
  const options: TestingModuleOptions = {
    imports: [...(await createTestingModule())],
  };

  if (imports) {
    options.imports = [...options.imports, ...imports];
  }

  if (controllers) {
    options.controllers = controllers;
  }

  if (providers) {
    options.providers = providers;
  }

  if (exports) {
    options.exports = exports;
  }

  const module: TestingModule = await Test.createTestingModule(
    options,
  ).compile();

  if (fixtures) {
    await TypeOrmHelper.loadFixtures(module, fixtures);
  }

  return module;
};
