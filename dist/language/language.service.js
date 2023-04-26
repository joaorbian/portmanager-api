"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let LanguageService = class LanguageService {
    async create(data) {
        const languageExists = await prisma_service_1.default.language.findFirst({
            where: {
                name: data.name
            }
        });
        if (languageExists) {
            return { message: 'Idioma já existe' };
        }
        const languages = await prisma_service_1.default.language.create({
            data: {
                name: data.name,
                icon: data.icon
            }
        });
        return languages;
    }
    async findAll() {
        return await prisma_service_1.default.language.findMany();
    }
    findOne(id) {
        return `This action returns a #${id} language`;
    }
    update(id, updateLanguageDto) {
        return `This action updates a #${id} language`;
    }
    remove(id) {
        return `This action removes a #${id} language`;
    }
};
LanguageService = __decorate([
    (0, common_1.Injectable)()
], LanguageService);
exports.LanguageService = LanguageService;
//# sourceMappingURL=language.service.js.map