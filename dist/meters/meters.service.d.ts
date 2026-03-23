import { Model } from 'mongoose';
import { MeterDocument } from './schemas/meter.schema';
import { CreateMeterDto } from './dto/create-meter.dto';
import { UpdateMeterDto } from './dto/update-meter.dto';
import { ClientsService } from '../clients/clients.service';
export declare class MetersService {
    private meterModel;
    private clientsService;
    constructor(meterModel: Model<MeterDocument>, clientsService: ClientsService);
    create(createMeterDto: CreateMeterDto): Promise<MeterDocument>;
    findAll(): Promise<MeterDocument[]>;
    findOne(id: string): Promise<MeterDocument>;
    update(id: string, updateMeterDto: UpdateMeterDto): Promise<MeterDocument>;
    remove(id: string): Promise<void>;
    attachClient(meterId: string, clientId: string): Promise<MeterDocument>;
    detachClient(meterId: string): Promise<MeterDocument>;
    search(query: string): Promise<MeterDocument[]>;
    findByClient(clientId: string): Promise<MeterDocument[]>;
}
