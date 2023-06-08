import { Injectable } from '@nestjs/common';
import { CreateDemoDto } from './dto/create-demo.dto';
import { UpdateDemoDto } from './dto/update-demo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Demo } from './entities/demo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DemoService {
  constructor(
    @InjectRepository(Demo)
    private readonly demoRepository: Repository<Demo>,
  ) {}

  async create(createDemoDto: CreateDemoDto) {
    return this.demoRepository.save(createDemoDto);
  }

  async findAll() {
    return this.demoRepository.find();
  }

  async findOne(id: number) {
    return this.demoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDemoDto: UpdateDemoDto) {
    return this.demoRepository.update(id, updateDemoDto);
  }

  async remove(id: number) {
    return this.demoRepository.delete({ id });
  }
}
