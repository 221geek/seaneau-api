import { MeterType, MeterStatus } from '../schemas/meter.schema';
export declare class LocationDto {
    address: string;
    latitude?: number;
    longitude?: number;
}
export declare class CreateMeterDto {
    serialNumber: string;
    type: MeterType;
    status?: MeterStatus;
    location: LocationDto;
    client?: string;
    installationDate?: string;
}
