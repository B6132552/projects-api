import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFoodDto, QueryFoodDto } from 'src/food/dto/createFood.dto';
import { Food } from 'src/typeorm/food.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food) private readonly foodRepository: Repository<Food>,
  ) {}

  async createFood(createFoodDto: CreateFoodDto, image: string) {
    // const user = await this.userRepository.findOne({
    //   where: {id: createFoodDto.user}
    // })
    // if(user){
    //   throw new BadRequestException();
    // }
    const newFood = this.foodRepository.create({...createFoodDto, image});
    return this.foodRepository.save(newFood);
  }

  getFoods(body: QueryFoodDto) {
    return this.foodRepository.find({
      where: (qb) => {
        if (body.name) {
          qb.andWhere('name = :name', { name: body.name });
        }
        if (body.type) {
          qb.andWhere('type = :type', { type: body.type });
        }
        if (body.status) {
          qb.andWhere('status = :status', { status: body.status });
        }
      },
    });
  }

  findFoodById(id: number) {
    return this.foodRepository.findOne(id);
  }

  update(id, foodtoUpdate) {
    this.foodRepository.update(id, foodtoUpdate);
  }

  delete(id) {
    this.foodRepository.delete(id);
  }
}
