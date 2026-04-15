import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InterventionsService } from './interventions.service';
import { InterventionsController } from './interventions.controller';
import { Intervention, InterventionSchema } from './schemas/intervention.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Intervention.name, schema: InterventionSchema }])],
  controllers: [InterventionsController],
  providers: [InterventionsService],
  exports: [InterventionsService],
})
export class InterventionsModule {}
