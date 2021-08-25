import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@gmail.com', description: 'Почтовый адрес'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({},{message: 'Некорректный email'})
    readonly email: string;
    @ApiProperty({example: '1234145345', description: 'Пароль'})
    @IsString({message: 'Должно быть строкой'})
    @Length(4,100, {message: 'Не меньше 4 и не более 100'})
    readonly password: string;
}
