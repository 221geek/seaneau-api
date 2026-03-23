import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AttachClientDto {
  @ApiProperty({ description: 'ID du client à rattacher' })
  @IsString()
  @IsNotEmpty()
  clientId: string;
}
