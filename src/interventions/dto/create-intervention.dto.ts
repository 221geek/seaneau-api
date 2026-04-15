import { IsEnum, IsNotEmpty, IsOptional, IsString, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { InterventionType, InterventionStatus } from '../schemas/intervention.schema';

export class CreateInterventionDto {
  @ApiProperty({ example: '64f1a2b3c4d5e6f7a8b9c0d1' })
  @IsString()
  @IsNotEmpty()
  meter: string;

  @ApiPropertyOptional({ example: '64f1a2b3c4d5e6f7a8b9c0d2' })
  @IsString()
  @IsOptional()
  technician?: string;

  @ApiProperty({ enum: InterventionType })
  @IsEnum(InterventionType)
  type: InterventionType;

  @ApiPropertyOptional({ enum: InterventionStatus })
  @IsEnum(InterventionStatus)
  @IsOptional()
  status?: InterventionStatus;

  @ApiProperty({ example: 'Remplacement joint défectueux' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiPropertyOptional({ example: '2024-02-15T09:00:00Z' })
  @IsDateString()
  @IsOptional()
  scheduledAt?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  notes?: string;
}
