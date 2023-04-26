import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(data: CreateUserDto): Promise<{
        message: string;
    }>;
    test(): {
        nome: string;
        age: number;
    }[];
    findOne(id: number): Promise<(import(".prisma/client").User & {
        UserHasTechnology: import(".prisma/client").UserHasTechnology[];
        UserHaslanguage: import(".prisma/client").UserHaslanguage[];
    }) | {
        message: string;
    }>;
    update(id: number, data: CreateUserDto): Promise<import(".prisma/client").User>;
    createStack(data: any): Promise<import(".prisma/client").UserHasTechnology>;
    createMyLanguages(data: any): Promise<import(".prisma/client").UserHaslanguage>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
