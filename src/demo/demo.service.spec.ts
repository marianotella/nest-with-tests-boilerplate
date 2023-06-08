import { TestingModule } from '@nestjs/testing';
import { DemoService } from './demo.service';
import { testingModule } from '../test-utils/testing.module';
import { demoFixture } from './fixtures/demo.fixture';

describe('DemoService', () => {
  let service: DemoService;

  beforeEach(async () => {
    const module: TestingModule = await testingModule({
      providers: [DemoService],
      fixtures: [demoFixture],
    });

    service = module.get<DemoService>(DemoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return 2 demos', async () => {
    const demos = await service.findAll();

    expect(demos).toHaveLength(2);
  });

  it('should return demo number 2', async () => {
    const demo = await service.findOne(2);

    expect(demo).toMatchObject({
      name: 'Demo 2',
    });
  });

  it('should create and return a demo', async () => {
    const demo = await service.create({
      name: 'Demo 3',
      description: 'Demo 3 description',
    });

    expect(demo).toMatchObject({
      name: 'Demo 3',
      description: 'Demo 3 description',
    });
  });

  it('should update and return a demo 2', async () => {
    const demo = await service.update(2, { description: 'Demo 2 actualizada' });

    expect(demo.affected).toBe(1);
  });

  it('should delete demo 2', async () => {
    const demo = await service.remove(2);

    expect(demo.affected).toBe(1);
  });
});
