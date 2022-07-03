import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CreateFoodDto, QueryFoodDto } from 'src/food/dto/createFood.dto';
import { FoodService } from 'src/food/service/food/food.service';
import { multerConfig } from 'src/food/multer.config';


@ApiTags('FOOD')
@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}
  @Post('create')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors( FileInterceptor('image', multerConfig(2 * 1024 * 1024, 'image')),)
  @UsePipes(ValidationPipe)
  createFood(@Body() createFoodDto: CreateFoodDto, @UploadedFile() image: any) {
    return this.foodService.createFood(createFoodDto,image.path);
  }

  @Get()
  getFoods(@Query() body : QueryFoodDto) {
    return this.foodService.getFoods(body);
  }

  @Get(':id')
  findFoodById(@Param('id', ParseIntPipe) id: number) {
    return this.foodService.findFoodById(id);
  }

  @Patch('update/:id')
  @HttpCode(200)
  updateEmployee(@Param('id', ParseIntPipe) id: number, @Body() createFoodDto: CreateFoodDto) {
    this.foodService.update(id,createFoodDto);
  }

  @Delete('delete/:id')
  @HttpCode(200)
  deleteFood(@Param('id', ParseIntPipe) id: number) {
    this.foodService.delete(id);
  }
}
