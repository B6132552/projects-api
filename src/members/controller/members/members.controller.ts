import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMemberDto } from 'src/members/dto/createmember.dto';
import { MembersService } from 'src/members/service/members/members.service';
@ApiTags('MEMBERS')
@Controller('members')
export class MembersController {

    constructor(private readonly memberService: MembersService) {}

    @Get()
    getMembers() {
      return this.memberService.getMembers();
    }
  
    @Get('id/:id')
    findMembersById(@Param('id', ParseIntPipe) id: number) {
      return this.memberService.findMembersById(id);
    }
  
    @Post('create')
    @UsePipes(ValidationPipe)
    createMembers(@Body()  createMemberDto: CreateMemberDto) {
      return this.memberService.createMember(createMemberDto);
    }
}
