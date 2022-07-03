import { ApiProperty } from '@nestjs/swagger';
import {  IsNotEmpty, IsOptional} from 'class-validator';

export class CreateFoodDto {
  @ApiProperty({ example: 'ข้าวมันไก่' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'อาหารคาว' })
  @IsNotEmpty()
  type: string;

  @ApiProperty({ example: 20 })
  @IsNotEmpty()
  price: number;

  @ApiProperty({ example: 'publish' })
  @IsNotEmpty()
  status: string;

  @ApiProperty({ example: 'ส้ม' })
  @IsOptional()
  discription: string;

  @ApiProperty({ type : 'file'})
  @IsOptional()
  image:  any;

  // @ApiProperty({ example: 1 })
  // @IsOptional()
  // user: number;

  
  // @ApiProperty({ example: 1 })
  // @IsOptional()
  // order?: number;
  
}

export class QueryFoodDto {
  @ApiProperty({ example: 'ข้าวมันไก่', nullable: true })
  @IsOptional()
  name: string;

  @ApiProperty({ example: 'อาหารคาว' , nullable: true })
  @IsOptional()
  type: string;

  @ApiProperty({ example: 'publish', nullable: true })
  @IsOptional()
  status: string;
}