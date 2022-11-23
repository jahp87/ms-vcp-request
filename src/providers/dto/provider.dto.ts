import { ApiProperty, OmitType } from '@nestjs/swagger';

export class ProviderDto {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  company: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  businessName: string;

  @ApiProperty()
  email: string;
}

export class UpdateProviderDto extends OmitType(ProviderDto, ['id'] as const) {}
