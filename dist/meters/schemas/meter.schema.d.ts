import { HydratedDocument, Types } from 'mongoose';
import { Client } from '../../clients/schemas/client.schema';
export type MeterDocument = HydratedDocument<Meter>;
export declare enum MeterType {
    MECHANICAL = "MECHANICAL",
    DIGITAL = "DIGITAL"
}
export declare enum MeterStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    SUSPENDED = "SUSPENDED"
}
export declare class MeterLocation {
    address: string;
    latitude?: number;
    longitude?: number;
}
export declare class Meter {
    serialNumber: string;
    type: MeterType;
    status: MeterStatus;
    location: MeterLocation;
    client: Client | Types.ObjectId | null;
    installationDate: Date;
    lastReadingDate: Date;
}
export declare const MeterSchema: import("mongoose").Schema<Meter, import("mongoose").Model<Meter, any, any, any, (import("mongoose").Document<unknown, any, Meter, any, import("mongoose").DefaultSchemaOptions> & Meter & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, Meter, any, import("mongoose").DefaultSchemaOptions> & Meter & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, Meter>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Meter, import("mongoose").Document<unknown, {}, Meter, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Meter & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    serialNumber?: import("mongoose").SchemaDefinitionProperty<string, Meter, import("mongoose").Document<unknown, {}, Meter, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Meter & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<MeterType, Meter, import("mongoose").Document<unknown, {}, Meter, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Meter & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<MeterStatus, Meter, import("mongoose").Document<unknown, {}, Meter, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Meter & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    location?: import("mongoose").SchemaDefinitionProperty<MeterLocation, Meter, import("mongoose").Document<unknown, {}, Meter, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Meter & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    client?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId | Client | null, Meter, import("mongoose").Document<unknown, {}, Meter, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Meter & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    installationDate?: import("mongoose").SchemaDefinitionProperty<Date, Meter, import("mongoose").Document<unknown, {}, Meter, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Meter & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lastReadingDate?: import("mongoose").SchemaDefinitionProperty<Date, Meter, import("mongoose").Document<unknown, {}, Meter, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Meter & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Meter>;
