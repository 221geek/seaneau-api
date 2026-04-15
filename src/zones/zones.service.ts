import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Zone, ZoneDocument } from './schemas/zone.schema';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';

@Injectable()
export class ZonesService {
  constructor(
    @InjectModel(Zone.name) private zoneModel: Model<ZoneDocument>,
  ) {}

  async create(dto: CreateZoneDto): Promise<ZoneDocument> {
    const existing = await this.zoneModel.findOne({ name: dto.name });
    if (existing) throw new ConflictException('Une zone avec ce nom existe déjà');
    const zone = new this.zoneModel(dto);
    return zone.save();
  }

  async findAll(): Promise<ZoneDocument[]> {
    return this.zoneModel.find().sort({ name: 1 }).exec();
  }

  async findOne(id: string): Promise<ZoneDocument> {
    const zone = await this.zoneModel.findById(id).exec();
    if (!zone) throw new NotFoundException('Zone non trouvée');
    return zone;
  }

  async update(id: string, dto: UpdateZoneDto): Promise<ZoneDocument> {
    const zone = await this.zoneModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    if (!zone) throw new NotFoundException('Zone non trouvée');
    return zone;
  }

  async remove(id: string): Promise<void> {
    const result = await this.zoneModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Zone non trouvée');
  }

  async search(query: string): Promise<ZoneDocument[]> {
    const regex = new RegExp(query, 'i');
    return this.zoneModel.find({ $or: [{ name: regex }, { region: regex }] }).exec();
  }
}
