import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'jsonwebtoken';
import { MembersService } from 'src/members/service/members/members.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private membersService: MembersService, private jwtService: JwtService, ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // async validateMember(username: string, pass: string): Promise<any> {
  //   const member = await this.membersService.findOne(username);
  //   if ( member &&  member.password === pass) {
  //     const { password, ...result } =  member;
  //     return result;
  //   }
  //   return null;
  // }

  // async loginMember(members: any) {
  //   console.log('mem ', members
  //   )
  //   const payload = { username: members.username, sub: members.memberId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }


  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return this.jwtService.sign(payload)
  }


}