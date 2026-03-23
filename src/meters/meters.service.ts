import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meter, MeterDocument } from './schemas/meter.schema';
import { CreateMeterDto } from './dto/create-meter.dto';
import { UpdateMeterDto } from './dto/update-meter.dto';
import { ClientsService } from '../clients/clients.service';

@Injectable()
export class MetersService {
  constructor(
    @InjectModel(Meter.name) private meterModel: Model<MeterDocument>,
    private clientsService: ClientsService,
  ) {}

  async create(createMeterDto: CreateMeterDto): Promise<MeterDocument> {
    const existing = await this.meterModel.findOne({
      serialNumber: createMeterDto.serialNumber,
    });
    if (existing) {
      throw new ConflictException('Un compteur avec ce numéro de série existe déjà');
    }

    if (createMeterDto.client) {
      await this.clientsService.findOne(createMeterDto.client);
    }

    const meter = new this.meterModel(createMeterDto);
    return (await meter.save()).populate('client');
  }

  async findAll(): Promise<MeterDocument[]> {
    return this.meterModel.find().populate('client').exec();
  }

  async findOne(id: string): Promise<MeterDocument> {
    const meter = await this.meterModel.findById(id).populate('client').exec();
    if (!meter) {
      throw new NotFoundException('Compteur non trouvé');
    }
    return meter;
  }

  async update(
    id: string,
    updateMeterDto: UpdateMeterDto,
  ): Promise<MeterDocument> {
    if (updateMeterDto.client) {
      await this.clientsService.findOne(updateMeterDto.client);
    }

    const meter = await this.meterModel
      .findByIdAndUpdate(id, updateMeterDto, { new: true })
      .populate('client')
      .exec();

    if (!meter) {
      throw new NotFoundException('Compteur non trouvé');
    }
    return meter;
  }

  async remove(id: string): Promise<void> {
    const result = await this.meterModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Compteur non trouvé');
    }
  }

  async attachClient(meterId: string, clientId: string): Promise<MeterDocument> {
    await this.clientsService.findOne(clientId);

    const meter = await this.meterModel
      .findByIdAndUpdate(meterId, { client: clientId }, { new: true })
      .populate('client')
      .exec();

    if (!meter) {
      throw new NotFoundException('Compteur non trouvé');
    }
    return meter;
  }

  async detachClient(meterId: string): Promise<MeterDocument> {
    const meter = await this.meterModel
      .findByIdAndUpdate(meterId, { client: null }, { new: true })
      .exec();

    if (!meter) {
      throw new NotFoundException('Compteur non trouvé');
    }
    return meter;
  }

  async search(query: string): Promise<MeterDocument[]> {
    const regex = new RegExp(query, 'i');
    return this.meterModel
      .find({
        $or: [{ serialNumber: regex }, { status: regex }],
      })
      .populate('client')
      .exec();
  }

  async findByClient(clientId: string): Promise<MeterDocument[]> {
    return this.meterModel
      .find({ client: clientId })
      .populate('client')
      .exec();
  }
}
