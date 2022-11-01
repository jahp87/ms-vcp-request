import { ApiProperty } from '@nestjs/swagger';

export class ProviderDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  taxId: string;

  @ApiProperty()
  names: string;

  @ApiProperty()
  fatherLastname: string;

  @ApiProperty()
  motherLastname: string;

  @ApiProperty()
  businessName: string;

  @ApiProperty()
  email: string;
}
