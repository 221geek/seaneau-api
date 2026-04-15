import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export type ZoneDocument = HydratedDocument<Zone>;

@Schema({ timestamps: true })
export class Zone {
  @ApiProperty({ example: 'Dakar-Centre' })
  @Prop({ required: true, unique: true, trim: true })
  name: string;

  @ApiProperty({ example: 'Dakar' })
  @Prop({ required: true, trim: true })
  region: string;

  @ApiPropertyOptional({ example: 'Zone couvrant le Plateau et la Médina' })
  @Prop({ trim: true })
  description: string;

  @ApiProperty()
  @Prop({ default: true })
  isActive: boolean;
}

export const ZoneSchema = SchemaFactory.createForClass(Zone);
