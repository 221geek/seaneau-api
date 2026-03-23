import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(user: any, _loginDto: LoginDto): Promise<{
        access_token: string;
        user: {
            _id: any;
            email: any;
            firstName: any;
            lastName: any;
            role: any;
        };
    }>;
}
