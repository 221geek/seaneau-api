import { Model } from 'mongoose';
import { ClientDocument } from './schemas/client.schema';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientsService {
    private clientModel;
    constructor(clientModel: Model<ClientDocument>);
    create(createClientDto: CreateClientDto): Promise<ClientDocument>;
    findAll(): Promise<ClientDocument[]>;
    findOne(id: string): Promise<ClientDocument>;
    update(id: string, updateClientDto: UpdateClientDto): Promise<ClientDocument>;
    remove(id: string): Promise<void>;
    search(query: string): Promise<ClientDocument[]>;
    private generateSubscriberNumber;
}
