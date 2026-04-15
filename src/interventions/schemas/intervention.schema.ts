import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Meter } from '../../meters/schemas/meter.schema';
import { User } from '../../users/schemas/user.schema';

export type InterventionDocument = HydratedDocument<Intervention>;

export enum InterventionType {
  INSTALLATION = 'INSTALLATION',
  MAINTENANCE = 'MAINTENANCE',
  REPAIR = 'REPAIR',
  INSPECTION = 'INSPECTION',
}

export enum InterventionStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

@Schema({ timestamps: true })
export class Intervention {
  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: 'Meter', required: true })
  meter: Meter | Types.ObjectId;

  @ApiPropertyOptional()
  @Prop({ type: Types.ObjectId, ref: 'User', default: null })
  technician: User | Types.ObjectId | null;

  @ApiProperty({ enum: InterventionType })
  @Prop({ required: true, enum: InterventionType })
  type: InterventionType;

  @ApiProperty({ enum: InterventionStatus })
  @Prop({ required: true, enum: InterventionStatus, default: InterventionStatus.PENDING })
  status: InterventionStatus;

  @ApiProperty({ example: 'Remplacement joint défectueux' })
  @Prop({ required: true, trim: true })
  description: string;

  @ApiPropertyOptional()
  @Prop()
  scheduledAt: Date;

  @ApiPropertyOptional()
  @Prop()
  completedAt: Date;

  @ApiPropertyOptional()
  @Prop({ trim: true })
  notes: string;
}

export const InterventionSchema = SchemaFactory.createForClass(Intervention);
