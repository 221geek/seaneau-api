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
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const client_schema_1 = require("./schemas/client.schema");
let ClientsService = class ClientsService {
    clientModel;
    constructor(clientModel) {
        this.clientModel = clientModel;
    }
    async create(createClientDto) {
        const subscriberNumber = await this.generateSubscriberNumber();
        const client = new this.clientModel({
            ...createClientDto,
            subscriberNumber,
        });
        return client.save();
    }
    async findAll() {
        return this.clientModel.find().exec();
    }
    async findOne(id) {
        const client = await this.clientModel.findById(id).exec();
        if (!client) {
            throw new common_1.NotFoundException('Client non trouvé');
        }
        return client;
    }
    async update(id, updateClientDto) {
        const client = await this.clientModel
            .findByIdAndUpdate(id, updateClientDto, { new: true })
            .exec();
        if (!client) {
            throw new common_1.NotFoundException('Client non trouvé');
        }
        return client;
    }
    async remove(id) {
        const result = await this.clientModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException('Client non trouvé');
        }
    }
    async search(query) {
        const regex = new RegExp(query, 'i');
        return this.clientModel
            .find({
            $or: [
                { subscriberNumber: regex },
                { firstName: regex },
                { lastName: regex },
                { phone: regex },
            ],
        })
            .exec();
    }
    async generateSubscriberNumber() {
        const lastClient = await this.clientModel
            .findOne()
            .sort({ createdAt: -1 })
            .exec();
        let nextNumber = 1;
        if (lastClient?.subscriberNumber) {
            const lastNumber = parseInt(lastClient.subscriberNumber.replace('SEN-', ''), 10);
            nextNumber = lastNumber + 1;
        }
        return `SEN-${nextNumber.toString().padStart(6, '0')}`;
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(client_schema_1.Client.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClientsService);
//# sourceMappingURL=clients.service.js.map