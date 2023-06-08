import { TestingModule } from '@nestjs/testing';
import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';
import { demoFixture } from './fixtures/demo.fixture';
import { testingModule } from '../test-utils/testing.module';

describe('DemoController', () => {
  let controller: DemoController;

  beforeEach(async () => {
    const module: TestingModule = await testingModule({
      providers: [DemoService],
      controllers: [DemoController],
      fixtures: [demoFixture],
    });

    controller = module.get<DemoController>(DemoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return 2 demos', async () => {
    const demos = await controller.findAll();

    expect(demos).toHaveLength(2);
  });

  it('should return demo number 2', async () => {
    const demo = await controller.findOne('2');

    expect(demo).toMatchObject({
      name: 'Demo 2',
    });
  });

  it('should create and return a demo', async () => {
    const demo = await controller.create({
      name: 'Demo 3',
      description: 'Demo 3 description',
    });

    expect(demo).toMatchObject({
      name: 'Demo 3',
      description: 'Demo 3 description',
    });
  });

  it('should update and return a demo 2', async () => {
    const demo = await controller.update('2', {
      description: 'Demo 2 actualizada',
    });

    expect(demo.affected).toBe(1);
  });

  it('should delete demo 2', async () => {
    const demo = await controller.remove('2');

    expect(demo.affected).toBe(1);
  });
});
