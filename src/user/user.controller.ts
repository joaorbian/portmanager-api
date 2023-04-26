import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) { }

  @Post()
  create(@Body() data: CreateUserDto) {
    return this.userService.store(data)
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.getOne(id)
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() data: CreateUserDto) {
    return this.userService.update(id, data)
  }

  @UseGuards(AuthGuard)
  @Post('create-stack')
  createStack(@Body() data: any) {
    return this.userService.createStack(data)
  }

  @UseGuards(AuthGuard)
  @Post('create-mylanguages')
  createMyLanguages(@Body() data: any) {
    return this.userService.createMyLanguages(data)
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
    delete(@Param('id') id: number) {
      return this.userService.delete(id)
  }

}
