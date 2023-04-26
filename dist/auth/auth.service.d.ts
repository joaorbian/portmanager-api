import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    login(data: CreateUserDto): Promise<{
        message: string;
        acess_token?: undefined;
    } | {
        acess_token: string;
        message?: undefined;
    }>;
    recovery(id: number, data: CreateUserDto): Promise<{
        message: string;
    }>;
}
