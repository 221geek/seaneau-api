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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const meter_schema_1 = require("./schemas/meter.schema");
const clients_service_1 = require("../clients/clients.service");
let MetersService = class MetersService {
    meterModel;
    clientsService;
    constructor(meterModel, clientsService) {
        this.meterModel = meterModel;
        this.clientsService = clientsService;
    }
    async create(createMeterDto) {
        const existing = await this.meterModel.findOne({
            serialNumber: createMeterDto.serialNumber,
        });
        if (existing) {
            throw new common_1.ConflictException('Un compteur avec ce numéro de série existe déjà');
        }
        if (createMeterDto.client) {
            await this.clientsService.findOne(createMeterDto.client);
        }
        const meter = new this.meterModel(createMeterDto);
        return (await meter.save()).populate('client');
    }
    async findAll() {
        return this.meterModel.find().populate('client').exec();
    }
    async findOne(id) {
        const meter = await this.meterModel.findById(id).populate('client').exec();
        if (!meter) {
            throw new common_1.NotFoundException('Compteur non trouvé');
        }
        return meter;
    }
    async update(id, updateMeterDto) {
        if (updateMeterDto.client) {
            await this.clientsService.findOne(updateMeterDto.client);
        }
        const meter = await this.meterModel
            .findByIdAndUpdate(id, updateMeterDto, { new: true })
            .populate('client')
            .exec();
        if (!meter) {
            throw new common_1.NotFoundException('Compteur non trouvé');
        }
        return meter;
    }
    async remove(id) {
        const result = await this.meterModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException('Compteur non trouvé');
        }
    }
    async attachClient(meterId, clientId) {
        await this.clientsService.findOne(clientId);
        const meter = await this.meterModel
            .findByIdAndUpdate(meterId, { client: clientId }, { new: true })
            .populate('client')
            .exec();
        if (!meter) {
            throw new common_1.NotFoundException('Compteur non trouvé');
        }
        return meter;
    }
    async detachClient(meterId) {
        const meter = await this.meterModel
            .findByIdAndUpdate(meterId, { client: null }, { new: true })
            .exec();
        if (!meter) {
            throw new common_1.NotFoundException('Compteur non trouvé');
        }
        return meter;
    }
    async search(query) {
        const regex = new RegExp(query, 'i');
        return this.meterModel
            .find({
            $or: [{ serialNumber: regex }, { status: regex }],
        })
            .populate('client')
            .exec();
    }
    async findByClient(clientId) {
        return this.meterModel
            .find({ client: clientId })
            .populate('client')
            .exec();
    }
};
exports.MetersService = MetersService;
exports.MetersService = MetersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(meter_schema_1.Meter.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        clients_service_1.ClientsService])
], MetersService);
//# sourceMappingURL=meters.service.js.map