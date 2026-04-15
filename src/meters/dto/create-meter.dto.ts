import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MeterStatus } from '../schemas/meter.schema';

export class LocationDto {
  @ApiProperty({ example: 'Dakar, Médina, Rue 22' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiPropertyOptional({ example: 14.6928 })
  @IsNumber()
  @IsOptional()
  latitude?: number;

  @ApiPropertyOptional({ example: -17.4467 })
  @IsNumber()
  @IsOptional()
  longitude?: number;
}

export class CreateMeterDto {
  @ApiProperty({ example: 'MTR-2024-001' })
  @IsString()
  @IsNotEmpty()
  serialNumber: string;

  @ApiProperty({ example: 'SmartFlow v4' })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiPropertyOptional({ enum: MeterStatus, default: MeterStatus.INACTIVE })
  @IsEnum(MeterStatus)
  @IsOptional()
  status?: MeterStatus;

  @ApiPropertyOptional({ type: LocationDto })
  @ValidateNested()
  @Type(() => LocationDto)
  @IsOptional()
  location?: LocationDto;

  @ApiPropertyOptional({ description: 'ID du client' })
  @IsString()
  @IsOptional()
  client?: string;

  @ApiPropertyOptional({ example: '2024-01-15' })
  @IsDateString()
  @IsOptional()
  installationDate?: string;
}
