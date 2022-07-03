import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Get,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/services/auth/auth.service';
import { SignInDto } from './dto/signin.dto';
import { Request as RequestExpress } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { Users } from './typeorm';
interface IDecode {
  username: string;
}

interface RequestWithUserRole extends Request {
  member?: IDecode;
}

@ApiBearerAuth()
@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @HttpCode(HttpStatus.OK)
  async login(@Request() req: RequestExpress, @Body() signinDto: SignInDto) {
    const accessToken = await this.authService.login(req.user);
    const user = req.user as Users;
    return {
      accessToken,
      userInfo: {id: user.id, username: user.username, name: user.name },
    };
  }
  // @UseGuards(LocalAuthGuard)
  //   @Post('auth/login/member')
  //   async loginMember(@Request() req: RequestExpress, @Body() signinDto: SignInDto) {
  //     return this.authService.loginMember(req.user);
  //   }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
