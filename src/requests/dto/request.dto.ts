import { ApiProperty, OmitType } from '@nestjs/swagger';

export class RequestDto {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  requestStatusId: number;

  @ApiProperty()
  countryId: number;

  @ApiProperty()
  origin: string;

  @ApiProperty()
  typeProviderId: number;

  @ApiProperty()
  businessGroupId: number;

  @ApiProperty()
  requestId?: string;

  @ApiProperty({
    type: 'json',
  })
  requestDetails: JSON;

  @ApiProperty({
    type: 'json',
  })
  societies: JSON;

  @ApiProperty()
  providerId: number;
}
export class UpdateRequestDto extends OmitType(RequestDto, [
  'id',
  'requestId',
] as const) {}
