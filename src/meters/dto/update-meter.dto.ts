import {
  IsEnum,
  IsOptional,
  IsString,
  IsDateString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { MeterStatus } from '../schemas/meter.schema';
import { LocationDto } from './create-meter.dto';

export class UpdateMeterDto {
  @ApiPropertyOptional({ example: 'MTR-2024-001' })
  @IsString()
  @IsOptional()
  serialNumber?: string;

  @ApiPropertyOptional({ example: 'SmartFlow v4' })
  @IsString()
  @IsOptional()
  type?: string;

  @ApiPropertyOptional({ enum: MeterStatus })
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

  @ApiPropertyOptional({ example: '2024-06-15' })
  @IsDateString()
  @IsOptional()
  lastReadingDate?: string;
}
