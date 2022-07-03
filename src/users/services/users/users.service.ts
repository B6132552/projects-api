import { BadRequestException, Body, HttpCode, Injectable, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { CreateUserDto, QueryUserDto } from 'src/users/dtos/CreateUser.dto';
import { Users } from 'src/typeorm/user.entity';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.findOne({
      where: {username: createUserDto.username}
    })
    if(user){
      throw new BadRequestException('user already exits');
    }
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  getUsers(body : QueryUserDto) {
    return this.userRepository.find({
      where: qb => {
        if(body.name){
          qb.andWhere('name = :name',{name: body.name} )
        }
        if(body.phone){
          qb.andWhere('phone = :phone',{phone: body.phone} )
        }
      }
    });
  }

  findUsersById(id: number) {
    return this.userRepository.findOne(id);
  }

  async findOne(username: string){
    return this.userRepository.findOne({where: {username: username}});
  }
  update(id, usertoUpdate) {
    this.userRepository.update(id, usertoUpdate);
  }

  
  delete(id){
    this.userRepository.delete(id);
  }
}
