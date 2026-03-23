import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ClientDocument = HydratedDocument<Client>;

@Schema({ timestamps: true })
export class Client {
  @ApiProperty()
  @Prop({ required: true, trim: true })
  firstName: string;

  @ApiProperty()
  @Prop({ required: true, trim: true })
  lastName: string;

  @ApiProperty()
  @Prop({ required: true, trim: true })
  address: string;

  @ApiProperty()
  @Prop({ required: true, trim: true })
  phone: string;

  @ApiProperty()
  @Prop({ trim: true, lowercase: true })
  email: string;

  @ApiProperty({ example: 'SEN-000001' })
  @Prop({ unique: true })
  subscriberNumber: string;

  @ApiProperty()
  @Prop({ default: true })
  isActive: boolean;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
