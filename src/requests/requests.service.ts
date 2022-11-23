import { Injectable } from '@nestjs/common';
import { RequestDto, UpdateRequestDto } from './dto/request.dto';
import { RequestEntity } from './entities/request.entity';
import { RequestRepository } from './repositories/request.repository';

@Injectable()
export class RequestsService {
  constructor(private requestRepository: RequestRepository) {}
  async create(requestDto: RequestDto): Promise<RequestEntity> {
    const countRequest = (await this.requestRepository.findAll()).length;
    requestDto.requestId =
      String(countRequest).padStart(6, '0') + '-' + new Date().getFullYear();
    const request: RequestEntity = await this.requestRepository.create(
      requestDto,
    );
    return request;
  }

  async findAll(): Promise<RequestEntity[]> {
    const requests: RequestEntity[] = await this.requestRepository.findAll();
    return requests;
  }

  async findOne(id: number): Promise<RequestEntity> {
    const request: RequestEntity = await this.requestRepository.findOne(id);
    return request;
  }

  async update(
    id: number,
    _updateRequestDto: UpdateRequestDto,
  ): Promise<RequestEntity> {
    const updateRequest = await this.requestRepository.update(
      id,
      _updateRequestDto,
    );
    return updateRequest;
  }

  async remove(id: number): Promise<void> {
    await this.requestRepository.remove(id);
  }

  getByRequestId(requestId: string): Promise<RequestEntity>{
    return this.requestRepository.getByRequestId(requestId);
  }
}
