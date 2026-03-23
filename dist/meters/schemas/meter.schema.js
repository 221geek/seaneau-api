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
exports.MeterSchema = exports.Meter = exports.MeterLocation = exports.MeterStatus = exports.MeterType = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const swagger_1 = require("@nestjs/swagger");
var MeterType;
(function (MeterType) {
    MeterType["MECHANICAL"] = "MECHANICAL";
    MeterType["DIGITAL"] = "DIGITAL";
})(MeterType || (exports.MeterType = MeterType = {}));
var MeterStatus;
(function (MeterStatus) {
    MeterStatus["ACTIVE"] = "ACTIVE";
    MeterStatus["INACTIVE"] = "INACTIVE";
    MeterStatus["SUSPENDED"] = "SUSPENDED";
})(MeterStatus || (exports.MeterStatus = MeterStatus = {}));
class MeterLocation {
    address;
    latitude;
    longitude;
}
exports.MeterLocation = MeterLocation;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MeterLocation.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], MeterLocation.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], MeterLocation.prototype, "longitude", void 0);
let Meter = class Meter {
    serialNumber;
    type;
    status;
    location;
    client;
    installationDate;
    lastReadingDate;
};
exports.Meter = Meter;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ required: true, unique: true, trim: true }),
    __metadata("design:type", String)
], Meter.prototype, "serialNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: MeterType }),
    (0, mongoose_1.Prop)({ required: true, enum: MeterType }),
    __metadata("design:type", String)
], Meter.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: MeterStatus }),
    (0, mongoose_1.Prop)({ required: true, enum: MeterStatus, default: MeterStatus.INACTIVE }),
    __metadata("design:type", String)
], Meter.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: MeterLocation }),
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", MeterLocation)
], Meter.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Client', default: null }),
    __metadata("design:type", Object)
], Meter.prototype, "client", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Meter.prototype, "installationDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Meter.prototype, "lastReadingDate", void 0);
exports.Meter = Meter = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Meter);
exports.MeterSchema = mongoose_1.SchemaFactory.createForClass(Meter);
//# sourceMappingURL=meter.schema.js.map