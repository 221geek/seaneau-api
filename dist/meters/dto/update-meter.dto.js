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
exports.UpdateMeterDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const meter_schema_1 = require("../schemas/meter.schema");
const create_meter_dto_1 = require("./create-meter.dto");
class UpdateMeterDto {
    serialNumber;
    type;
    status;
    location;
    client;
    installationDate;
    lastReadingDate;
}
exports.UpdateMeterDto = UpdateMeterDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'MTR-2024-001' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMeterDto.prototype, "serialNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: meter_schema_1.MeterType }),
    (0, class_validator_1.IsEnum)(meter_schema_1.MeterType),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMeterDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: meter_schema_1.MeterStatus }),
    (0, class_validator_1.IsEnum)(meter_schema_1.MeterStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMeterDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: create_meter_dto_1.LocationDto }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_meter_dto_1.LocationDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", create_meter_dto_1.LocationDto)
], UpdateMeterDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID du client' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMeterDto.prototype, "client", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2024-01-15' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMeterDto.prototype, "installationDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2024-06-15' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMeterDto.prototype, "lastReadingDate", void 0);
//# sourceMappingURL=update-meter.dto.js.map