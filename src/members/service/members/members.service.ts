import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMemberDto } from 'src/members/dto/createmember.dto';
import { Repository } from 'typeorm';
import { Members } from './../../../typeorm/members.entity';

@Injectable()
export class MembersService {
    constructor(
        @InjectRepository(Members) private readonly memberRepository: Repository<Members>,
      ) {}
    
      createMember(createMemberDto: CreateMemberDto) {
        const newMember= this.memberRepository.create(createMemberDto);
        return this.memberRepository.save(newMember);
      }
    
      getMembers() {
        return this.memberRepository.find();
      }
    
      findMembersById(id: number) {
        return this.memberRepository.findOne(id)
      }
    
      async findOne(username: string){
        return this.memberRepository.findOne({where: {username: username}});
      }
}
