import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    store(data: CreateUserDto): Promise<{
        message: string;
    }>;
    getOne(id: number): Promise<(import(".prisma/client").User & {
        UserHasTechnology: import(".prisma/client").UserHasTechnology[];
        UserHaslanguage: import(".prisma/client").UserHaslanguage[];
    }) | {
        message: string;
    }>;
    createStack(data: any): Promise<import(".prisma/client").UserHasTechnology>;
    createMyLanguages(data: any): Promise<import(".prisma/client").UserHaslanguage>;
    update(id: number, data: CreateUserDto): Promise<import(".prisma/client").User>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
