import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    create(createClientDto: CreateClientDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/client.schema").Client, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/client.schema").Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/client.schema").Client, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/client.schema").Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    search(query: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/client.schema").Client, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/client.schema").Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/client.schema").Client, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/client.schema").Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, updateClientDto: UpdateClientDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/client.schema").Client, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/client.schema").Client & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<void>;
}
