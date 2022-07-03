import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateOrderDto {
    @ApiProperty({ example: '30' })
    @IsNotEmpty()
    table: string;
  
    @ApiProperty({ example: 20 })
    @IsNotEmpty()
    quantity: number;
  
    @ApiProperty({ example: 200 })
    @IsNotEmpty()
    total: number;
  
    @ApiProperty({ example: 20 })
    @IsOptional()
    sale: number;
  
    @ApiProperty({ example: 1 })
    @IsOptional()
    food: number;
    
  }