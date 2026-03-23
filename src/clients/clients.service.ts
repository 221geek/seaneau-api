import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument } from './schemas/client.schema';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<ClientDocument> {
    const subscriberNumber = await this.generateSubscriberNumber();
    const client = new this.clientModel({
      ...createClientDto,
      subscriberNumber,
    });
    return client.save();
  }

  async findAll(): Promise<ClientDocument[]> {
    return this.clientModel.find().exec();
  }

  async findOne(id: string): Promise<ClientDocument> {
    const client = await this.clientModel.findById(id).exec();
    if (!client) {
      throw new NotFoundException('Client non trouvé');
    }
    return client;
  }

  async update(
    id: string,
    updateClientDto: UpdateClientDto,
  ): Promise<ClientDocument> {
    const client = await this.clientModel
      .findByIdAndUpdate(id, updateClientDto, { new: true })
      .exec();
    if (!client) {
      throw new NotFoundException('Client non trouvé');
    }
    return client;
  }

  async remove(id: string): Promise<void> {
    const result = await this.clientModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Client non trouvé');
    }
  }

  async search(query: string): Promise<ClientDocument[]> {
    const regex = new RegExp(query, 'i');
    return this.clientModel
      .find({
        $or: [
          { subscriberNumber: regex },
          { firstName: regex },
          { lastName: regex },
          { phone: regex },
        ],
      })
      .exec();
  }

  private async generateSubscriberNumber(): Promise<string> {
    const lastClient = await this.clientModel
      .findOne()
      .sort({ createdAt: -1 })
      .exec();

    let nextNumber = 1;
    if (lastClient?.subscriberNumber) {
      const lastNumber = parseInt(
        lastClient.subscriberNumber.replace('SEN-', ''),
        10,
      );
      nextNumber = lastNumber + 1;
    }

    return `SEN-${nextNumber.toString().padStart(6, '0')}`;
  }
}
