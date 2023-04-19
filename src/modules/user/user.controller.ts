import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('user')
export class UserController {
  
  constructor(
    private readonly userService: UserService
  ) { }

  @Post()
  create(@Body() data: UserDTO) {
    return this.userService.store(data)
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.getOne(id)
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() data: UserDTO) {
    return this.userService.update(id, data)
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
    delete(@Param('id') id: number) {
      return this.userService.delete(id)
  }

}
