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
exports.MetersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const meters_service_1 = require("./meters.service");
const create_meter_dto_1 = require("./dto/create-meter.dto");
const update_meter_dto_1 = require("./dto/update-meter.dto");
const attach_client_dto_1 = require("./dto/attach-client.dto");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const role_enum_1 = require("../common/enums/role.enum");
let MetersController = class MetersController {
    metersService;
    constructor(metersService) {
        this.metersService = metersService;
    }
    create(createMeterDto) {
        return this.metersService.create(createMeterDto);
    }
    findAll() {
        return this.metersService.findAll();
    }
    search(query) {
        return this.metersService.search(query);
    }
    findByClient(clientId) {
        return this.metersService.findByClient(clientId);
    }
    findOne(id) {
        return this.metersService.findOne(id);
    }
    update(id, updateMeterDto) {
        return this.metersService.update(id, updateMeterDto);
    }
    remove(id) {
        return this.metersService.remove(id);
    }
    attachClient(id, attachClientDto) {
        return this.metersService.attachClient(id, attachClientDto.clientId);
    }
    detachClient(id) {
        return this.metersService.detachClient(id);
    }
};
exports.MetersController = MetersController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un compteur' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_meter_dto_1.CreateMeterDto]),
    __metadata("design:returntype", void 0)
], MetersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Lister tous les compteurs' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MetersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiOperation)({ summary: 'Rechercher des compteurs' }),
    (0, swagger_1.ApiQuery)({ name: 'q', description: 'Recherche par numéro de série ou statut' }),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MetersController.prototype, "search", null);
__decorate([
    (0, common_1.Get)('client/:clientId'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer les compteurs d\'un client' }),
    __param(0, (0, common_1.Param)('clientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MetersController.prototype, "findByClient", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer un compteur par ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MetersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier un compteur' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_meter_dto_1.UpdateMeterDto]),
    __metadata("design:returntype", void 0)
], MetersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un compteur' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MetersController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/attach'),
    (0, swagger_1.ApiOperation)({ summary: 'Rattacher un compteur à un client' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, attach_client_dto_1.AttachClientDto]),
    __metadata("design:returntype", void 0)
], MetersController.prototype, "attachClient", null);
__decorate([
    (0, common_1.Patch)(':id/detach'),
    (0, swagger_1.ApiOperation)({ summary: 'Détacher un compteur d\'un client' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MetersController.prototype, "detachClient", null);
exports.MetersController = MetersController = __decorate([
    (0, swagger_1.ApiTags)('Meters'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('meters'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.SUPER_ADMIN, role_enum_1.Role.TECHNICIAN),
    __metadata("design:paramtypes", [meters_service_1.MetersService])
], MetersController);
//# sourceMappingURL=meters.controller.js.map