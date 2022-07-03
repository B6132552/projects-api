import { ApiProperty } from "@nestjs/swagger";
import {  IsEmail, MinLength } from "class-validator";

export class UpdateUserDto {
    @ApiProperty({example: 'Teerasak'})
    @MinLength(3)
    username: string;

    @ApiProperty({example: 'Cite20-.'})
    @MinLength(8)
    password: string;

    @ApiProperty({example: 'Teerasak'})
    name: string;

    @ApiProperty({example: 'asosid15@gmail.com'})
    @IsEmail()
    email: string;

    @ApiProperty({example: '0946738282'})
    @MinLength(10)
    phone: string;
}
