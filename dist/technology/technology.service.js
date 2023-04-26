"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnologyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let TechnologyService = class TechnologyService {
    async store(createTechnologyDto) {
        const tecnolhgyExists = await prisma_service_1.default.technology.findFirst({
            where: {
                name: createTechnologyDto.name
            }
        });
        if (tecnolhgyExists) {
            return { message: 'Technology already exists' };
        }
        await prisma_service_1.default.technology.create({
            data: {
                name: createTechnologyDto.name,
                icon: createTechnologyDto.icon
            }
        });
        return { message: 'Technology created with success' };
    }
    async findAll() {
        return await prisma_service_1.default.technology.findMany();
    }
    async findOneTechnology(id) {
        const tehcnolgy = await prisma_service_1.default.technology.findUnique({
            where: {
                id: Number(id)
            }
        });
        return tehcnolgy;
    }
    async update(id, updateTechnologyDto) {
        return `This action updates a #${id} technology`;
    }
    async delete(id) {
        await prisma_service_1.default.technology.delete({
            where: {
                id: Number(id)
            }
        });
        return { message: 'Technology deleted with success' };
    }
};
TechnologyService = __decorate([
    (0, common_1.Injectable)()
], TechnologyService);
exports.TechnologyService = TechnologyService;
//# sourceMappingURL=technology.service.js.map