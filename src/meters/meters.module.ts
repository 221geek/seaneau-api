import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MetersService } from './meters.service';
import { MetersController } from './meters.controller';
import { Meter, MeterSchema } from './schemas/meter.schema';
import { ClientsModule } from '../clients/clients.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Meter.name, schema: MeterSchema }]),
    ClientsModule,
  ],
  controllers: [MetersController],
  providers: [MetersService],
  exports: [MetersService],
})
export class MetersModule {}
