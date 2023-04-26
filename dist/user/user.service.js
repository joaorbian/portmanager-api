"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    async store(data) {
        const userExists = await prisma_service_1.default.user.findFirst({
            where: {
                email: data.email
            }
        });
        if (userExists) {
            return { message: 'Email already exists' };
        }
        data.password = await bcrypt.hash(data.password, 10);
        await prisma_service_1.default.user.create({
            data
        });
        return { message: 'User created with success' };
    }
    async getOne(id) {
        const user = await prisma_service_1.default.user.findFirst({
            where: {
                id: Number(id)
            },
            include: {
                UserHasTechnology: true,
                UserHaslanguage: true
            }
        });
        if (!user) {
            return { message: 'User not found' };
        }
        delete user.password;
        return user;
    }
    async createStack(data) {
        const stack = await prisma_service_1.default.userHasTechnology.create({
            data: {
                user_id: data.user_id,
                technology_id: data.technology_id
            }
        });
        return stack;
    }
    async createMyLanguages(data) {
        const myLanguages = await prisma_service_1.default.userHaslanguage.create({
            data: {
                user_id: data.user_id,
                language_id: data.language_id
            }
        });
        return myLanguages;
    }
    async update(id, data) {
        const user = await prisma_service_1.default.user.update({
            where: {
                id: Number(id)
            },
            data: data
        });
        delete user.password;
        return user;
    }
    async delete(id) {
        await prisma_service_1.default.user.delete({
            where: {
                id: Number(id)
            }
        });
        return { message: 'User deleted with success' };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map