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
exports.TechnologyController = void 0;
const common_1 = require("@nestjs/common");
const technology_service_1 = require("./technology.service");
const create_technology_dto_1 = require("./dto/create-technology.dto");
const update_technology_dto_1 = require("./dto/update-technology.dto");
const auth_guard_1 = require("../auth/auth.guard");
let TechnologyController = class TechnologyController {
    constructor(technologyService) {
        this.technologyService = technologyService;
    }
    create(data) {
        return this.technologyService.store(data);
    }
    findAll() {
        return this.technologyService.findAll();
    }
    findOne(id) {
        return this.technologyService.findOneTechnology(id);
    }
    update(id, updateTechnologyDto) {
        return this.technologyService.update(id, updateTechnologyDto);
    }
    remove(id) {
        return this.technologyService.delete(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_technology_dto_1.CreateTechnologyDto]),
    __metadata("design:returntype", void 0)
], TechnologyController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TechnologyController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TechnologyController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_technology_dto_1.UpdateTechnologyDto]),
    __metadata("design:returntype", void 0)
], TechnologyController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TechnologyController.prototype, "remove", null);
TechnologyController = __decorate([
    (0, common_1.Controller)('technology'),
    __metadata("design:paramtypes", [technology_service_1.TechnologyService])
], TechnologyController);
exports.TechnologyController = TechnologyController;
//# sourceMappingURL=technology.controller.js.map