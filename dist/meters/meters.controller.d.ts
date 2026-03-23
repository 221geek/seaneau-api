import { MetersService } from './meters.service';
import { CreateMeterDto } from './dto/create-meter.dto';
import { UpdateMeterDto } from './dto/update-meter.dto';
import { AttachClientDto } from './dto/attach-client.dto';
export declare class MetersController {
    private readonly metersService;
    constructor(metersService: MetersService);
    create(createMeterDto: CreateMeterDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/meter.schema").Meter, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/meter.schema").Meter & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/meter.schema").Meter, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/meter.schema").Meter & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    search(query: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/meter.schema").Meter, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/meter.schema").Meter & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findByClient(clientId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/meter.schema").Meter, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/meter.schema").Meter & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/meter.schema").Meter, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/meter.schema").Meter & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, updateMeterDto: UpdateMeterDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/meter.schema").Meter, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/meter.schema").Meter & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<void>;
    attachClient(id: string, attachClientDto: AttachClientDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/meter.schema").Meter, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/meter.schema").Meter & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    detachClient(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/meter.schema").Meter, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/meter.schema").Meter & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
}
