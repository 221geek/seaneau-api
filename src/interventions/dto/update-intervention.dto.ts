import { IsEnum, IsOptional, IsString, IsDateString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { InterventionType, InterventionStatus } from '../schemas/intervention.schema';

export class UpdateInterventionDto {
  @ApiPropertyOptional({ enum: InterventionType })
  @IsEnum(InterventionType)
  @IsOptional()
  type?: InterventionType;

  @ApiPropertyOptional({ enum: InterventionStatus })
  @IsEnum(InterventionStatus)
  @IsOptional()
  status?: InterventionStatus;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  technician?: string;

  @ApiPropertyOptional()
  @IsDateString()
  @IsOptional()
  scheduledAt?: string;

  @ApiPropertyOptional()
  @IsDateString()
  @IsOptional()
  completedAt?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  notes?: string;
}
