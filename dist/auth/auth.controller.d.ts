import { AuthService } from './auth.service';
import { UserInterface } from '../user/interface/user.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(data: UserInterface): Promise<{
        message: string;
        acess_token?: undefined;
    } | {
        acess_token: string;
        message?: undefined;
    }>;
    recovery(id: number, data: UserInterface): Promise<{
        message: string;
    }>;
}
