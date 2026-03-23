import { MeterType, MeterStatus } from '../schemas/meter.schema';
import { LocationDto } from './create-meter.dto';
export declare class UpdateMeterDto {
    serialNumber?: string;
    type?: MeterType;
    status?: MeterStatus;
    location?: LocationDto;
    client?: string;
    installationDate?: string;
    lastReadingDate?: string;
}
