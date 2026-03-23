import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Client } from '../../clients/schemas/client.schema';

export type MeterDocument = HydratedDocument<Meter>;

export enum MeterType {
  MECHANICAL = 'MECHANICAL',
  DIGITAL = 'DIGITAL',
}

export enum MeterStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
}

export class MeterLocation {
  @ApiProperty()
  address: string;

  @ApiPropertyOptional()
  latitude?: number;

  @ApiPropertyOptional()
  longitude?: number;
}

@Schema({ timestamps: true })
export class Meter {
  @ApiProperty()
  @Prop({ required: true, unique: true, trim: true })
  serialNumber: string;

  @ApiProperty({ enum: MeterType })
  @Prop({ required: true, enum: MeterType })
  type: MeterType;

  @ApiProperty({ enum: MeterStatus })
  @Prop({ required: true, enum: MeterStatus, default: MeterStatus.INACTIVE })
  status: MeterStatus;

  @ApiProperty({ type: MeterLocation })
  @Prop({ type: Object })
  location: MeterLocation;

  @ApiPropertyOptional()
  @Prop({ type: Types.ObjectId, ref: 'Client', default: null })
  client: Client | Types.ObjectId | null;

  @ApiPropertyOptional()
  @Prop()
  installationDate: Date;

  @ApiPropertyOptional()
  @Prop()
  lastReadingDate: Date;
}

export const MeterSchema = SchemaFactory.createForClass(Meter);
