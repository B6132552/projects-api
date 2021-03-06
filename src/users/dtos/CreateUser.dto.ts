import { ApiProperty } from "@nestjs/swagger";
import {  IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";

export class CreateUserDto {
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
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({example: '0946738282'})
    @IsNotEmpty()
    @MinLength(10)
    phone: string;
}

export class QueryUserDto {
    @ApiProperty({ example: 'Teerasak', nullable: true })
    @IsOptional()
    name: string;
  
    @ApiProperty({ example: '0946738282' , nullable: true })
    @IsOptional()
    phone: string;
  }