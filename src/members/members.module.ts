import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Members } from 'src/typeorm';
import { MembersController } from './controller/members/members.controller';
import { MembersService } from './service/members/members.service';

@Module({
  imports: [TypeOrmModule.forFeature([Members]),],
  controllers: [MembersController],
  providers: [MembersService],
  exports: [MembersService]
})
export class MembersModule {}
