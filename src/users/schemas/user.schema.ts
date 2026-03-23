import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from '../../common/enums/role.enum';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @ApiProperty()
  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @ApiProperty()
  @Prop({ required: true, trim: true })
  firstName: string;

  @ApiProperty()
  @Prop({ required: true, trim: true })
  lastName: string;

  @ApiProperty({ enum: Role })
  @Prop({ required: true, enum: Role, default: Role.TECHNICIAN })
  role: Role;

  @ApiProperty()
  @Prop({ default: true })
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
