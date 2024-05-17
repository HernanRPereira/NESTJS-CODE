import { PartialType } from '@nestjs/swagger';
import { LoginAuthDto } from './login-auth.dto';
import { IsNotEmpty } from 'class-validator';
import { Role } from '../roles-guard/role.enum';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    Rol: Role

}
