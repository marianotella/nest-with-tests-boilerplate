import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { Demo } from './entities/demo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Demo])],
  controllers: [DemoController],
  providers: [DemoService],
})
export class DemoModule {}
