import { ApiProperty } from "@nestjs/swagger";
import {  IsNotEmpty, MinLength } from "class-validator";

export class SignInDto {
    @ApiProperty({example: 'Teerasak'})
    @IsNotEmpty()
    @MinLength(3)
    username: string;

    @ApiProperty({example: 'Cite20-.'})
    @IsNotEmpty()
    @IsNotEmpty()
    @MinLength(8)
    password: string;
}