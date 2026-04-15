import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invoice, InvoiceDocument, InvoiceStatus } from './schemas/invoice.schema';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Injectable()
export class BillingService {
  constructor(
    @InjectModel(Invoice.name) private invoiceModel: Model<InvoiceDocument>,
  ) {}

  async create(dto: CreateInvoiceDto): Promise<InvoiceDocument> {
    const invoice = new this.invoiceModel(dto);
    return (await invoice.save()).populate(['client', 'meter']);
  }

  async findAll(): Promise<InvoiceDocument[]> {
    return this.invoiceModel.find().populate(['client', 'meter']).sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<InvoiceDocument> {
    const invoice = await this.invoiceModel.findById(id).populate(['client', 'meter']).exec();
    if (!invoice) throw new NotFoundException('Facture non trouvée');
    return invoice;
  }

  async findByClient(clientId: string): Promise<InvoiceDocument[]> {
    return this.invoiceModel.find({ client: clientId }).populate(['client', 'meter']).sort({ createdAt: -1 }).exec();
  }

  async update(id: string, dto: UpdateInvoiceDto): Promise<InvoiceDocument> {
    const invoice = await this.invoiceModel
      .findByIdAndUpdate(id, dto, { new: true })
      .populate(['client', 'meter'])
      .exec();
    if (!invoice) throw new NotFoundException('Facture non trouvée');
    return invoice;
  }

  async markAsPaid(id: string): Promise<InvoiceDocument> {
    const invoice = await this.invoiceModel
      .findByIdAndUpdate(id, { status: InvoiceStatus.PAID, paidAt: new Date() }, { new: true })
      .populate(['client', 'meter'])
      .exec();
    if (!invoice) throw new NotFoundException('Facture non trouvée');
    return invoice;
  }

  async remove(id: string): Promise<void> {
    const result = await this.invoiceModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Facture non trouvée');
  }

  async search(query: string): Promise<InvoiceDocument[]> {
    const regex = new RegExp(query, 'i');
    return this.invoiceModel
      .find({ $or: [{ period: regex }, { status: regex }] })
      .populate(['client', 'meter'])
      .sort({ createdAt: -1 })
      .exec();
  }
}
