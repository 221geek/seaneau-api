import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Client } from '../../clients/schemas/client.schema';
import { Meter } from '../../meters/schemas/meter.schema';

export type InvoiceDocument = HydratedDocument<Invoice>;

export enum InvoiceStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  OVERDUE = 'OVERDUE',
}

@Schema({ timestamps: true })
export class Invoice {
  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'Client', required: true })
  client: Client | Types.ObjectId;

  @ApiPropertyOptional()
  @Prop({ type: Types.ObjectId, ref: 'Meter', default: null })
  meter: Meter | Types.ObjectId | null;

  @ApiProperty({ example: '2024-01' })
  @Prop({ required: true, trim: true })
  period: string;

  @ApiPropertyOptional({ example: 12.5 })
  @Prop({ default: 0 })
  consumption: number;

  @ApiProperty({ example: 15000 })
  @Prop({ required: true })
  amount: number;

  @ApiProperty({ enum: InvoiceStatus })
  @Prop({ required: true, enum: InvoiceStatus, default: InvoiceStatus.PENDING })
  status: InvoiceStatus;

  @ApiPropertyOptional()
  @Prop()
  dueDate: Date;

  @ApiPropertyOptional()
  @Prop()
  paidAt: Date;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
