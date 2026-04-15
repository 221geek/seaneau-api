import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Intervention, InterventionDocument, InterventionStatus } from './schemas/intervention.schema';
import { CreateInterventionDto } from './dto/create-intervention.dto';
import { UpdateInterventionDto } from './dto/update-intervention.dto';

@Injectable()
export class InterventionsService {
  constructor(
    @InjectModel(Intervention.name) private interventionModel: Model<InterventionDocument>,
  ) {}

  async create(dto: CreateInterventionDto): Promise<InterventionDocument> {
    const intervention = new this.interventionModel(dto);
    return (await intervention.save()).populate(['meter', 'technician']);
  }

  async findAll(): Promise<InterventionDocument[]> {
    return this.interventionModel.find().populate(['meter', 'technician']).sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<InterventionDocument> {
    const intervention = await this.interventionModel.findById(id).populate(['meter', 'technician']).exec();
    if (!intervention) throw new NotFoundException('Intervention non trouvée');
    return intervention;
  }

  async findByMeter(meterId: string): Promise<InterventionDocument[]> {
    return this.interventionModel.find({ meter: meterId }).populate(['meter', 'technician']).exec();
  }

  async update(id: string, dto: UpdateInterventionDto): Promise<InterventionDocument> {
    const update: any = { ...dto };
    if (dto.status === InterventionStatus.COMPLETED && !dto.completedAt) {
      update.completedAt = new Date();
    }
    const intervention = await this.interventionModel
      .findByIdAndUpdate(id, update, { new: true })
      .populate(['meter', 'technician'])
      .exec();
    if (!intervention) throw new NotFoundException('Intervention non trouvée');
    return intervention;
  }

  async remove(id: string): Promise<void> {
    const result = await this.interventionModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Intervention non trouvée');
  }

  async search(query: string): Promise<InterventionDocument[]> {
    const regex = new RegExp(query, 'i');
    return this.interventionModel
      .find({ $or: [{ type: regex }, { status: regex }, { description: regex }] })
      .populate(['meter', 'technician'])
      .sort({ createdAt: -1 })
      .exec();
  }
}
