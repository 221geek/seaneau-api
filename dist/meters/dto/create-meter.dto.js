"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMeterDto = exports.LocationDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const meter_schema_1 = require("../schemas/meter.schema");
class LocationDto {
    address;
    latitude;
    longitude;
}
exports.LocationDto = LocationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Dakar, Médina, Rue 22' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LocationDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 14.6928 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], LocationDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: -17.4467 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], LocationDto.prototype, "longitude", void 0);
class CreateMeterDto {
    serialNumber;
    type;
    status;
    location;
    client;
    installationDate;
}
exports.CreateMeterDto = CreateMeterDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'MTR-2024-001' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMeterDto.prototype, "serialNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: meter_schema_1.MeterType, example: meter_schema_1.MeterType.DIGITAL }),
    (0, class_validator_1.IsEnum)(meter_schema_1.MeterType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMeterDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: meter_schema_1.MeterStatus, default: meter_schema_1.MeterStatus.INACTIVE }),
    (0, class_validator_1.IsEnum)(meter_schema_1.MeterStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMeterDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: LocationDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => LocationDto),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", LocationDto)
], CreateMeterDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID du client' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMeterDto.prototype, "client", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2024-01-15' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMeterDto.prototype, "installationDate", void 0);
//# sourceMappingURL=create-meter.dto.js.map