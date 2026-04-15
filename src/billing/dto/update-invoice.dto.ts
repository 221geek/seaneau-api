import { IsEnum, IsNumber, IsOptional, IsString, IsDateString, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { InvoiceStatus } from '../schemas/invoice.schema';

export class UpdateInvoiceDto {
  @ApiPropertyOptional({ example: '2024-01' })
  @IsString()
  @IsOptional()
  period?: string;

  @ApiPropertyOptional({ example: 12.5 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  consumption?: number;

  @ApiPropertyOptional({ example: 15000 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  amount?: number;

  @ApiPropertyOptional({ enum: InvoiceStatus })
  @IsEnum(InvoiceStatus)
  @IsOptional()
  status?: InvoiceStatus;

  @ApiPropertyOptional()
  @IsDateString()
  @IsOptional()
  dueDate?: string;

  @ApiPropertyOptional()
  @IsDateString()
  @IsOptional()
  paidAt?: string;
}
