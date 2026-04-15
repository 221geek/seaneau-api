import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsDateString, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { InvoiceStatus } from '../schemas/invoice.schema';

export class CreateInvoiceDto {
  @ApiProperty({ example: '64f1a2b3c4d5e6f7a8b9c0d1' })
  @IsString()
  @IsNotEmpty()
  client: string;

  @ApiPropertyOptional({ example: '64f1a2b3c4d5e6f7a8b9c0d2' })
  @IsString()
  @IsOptional()
  meter?: string;

  @ApiProperty({ example: '2024-01' })
  @IsString()
  @IsNotEmpty()
  period: string;

  @ApiPropertyOptional({ example: 12.5 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  consumption?: number;

  @ApiProperty({ example: 15000 })
  @IsNumber()
  @Min(0)
  amount: number;

  @ApiPropertyOptional({ enum: InvoiceStatus })
  @IsEnum(InvoiceStatus)
  @IsOptional()
  status?: InvoiceStatus;

  @ApiPropertyOptional({ example: '2024-02-28' })
  @IsDateString()
  @IsOptional()
  dueDate?: string;
}
