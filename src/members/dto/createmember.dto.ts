import { ApiProperty } from "@nestjs/swagger";
import {  IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateMemberDto {
    @ApiProperty({example: 'Teerasak'})
    @IsNotEmpty()
    @MinLength(3)
    username: string;

    @ApiProperty({example: 'Cite20-.'})
    @IsNotEmpty()
    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @ApiProperty({example: 'Teerasak'})
    @IsNotEmpty()
    name: string;

    @ApiProperty({example: 'asosid15@gmail.com'})
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({example: 'ชาย'})
    @IsNotEmpty()
    gender: string;

    @ApiProperty({example: '0946738282'})
    @IsNotEmpty()
    @MinLength(10)
    phone: string;
}