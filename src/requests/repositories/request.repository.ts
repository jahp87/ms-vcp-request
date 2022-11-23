import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { RequestDto } from '../dto/request.dto';
import { RequestEntity } from '../entities/request.entity';

@Injectable()
export class RequestRepository {
  constructor(
    @InjectRepository(RequestEntity)
    private requestRepository: Repository<RequestEntity>,
  ) {}

  findAll(): Promise<RequestEntity[]> {
    return this.requestRepository.find();
  }

  findOne(id: number): Promise<RequestEntity> {
    return this.requestRepository.findOneBy({ id });
  }

  create(requestDto: RequestDto): Promise<RequestEntity> {
    return this.requestRepository.save(requestDto);
  }

  async update(id: number, requestDto: RequestDto) {
    await this.requestRepository.update(id, requestDto);
    return this.requestRepository.findOneBy({ id });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.requestRepository.delete(id);
  }

  getByRequestId(requestId: string): Promise<RequestEntity> {
 
    return this.requestRepository.findOneBy({ requestId });
  }
}
