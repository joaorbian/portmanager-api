import { Body, Controller, Param, Post, Put, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard'
import { UserDTO } from '../user/interface/user.interface'

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService
  ) { }

  @Post()
  async login(@Body() data: UserDTO) {
    return this.authService.login(data)
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async recovery(@Param('id') id: number, @Body() data: UserDTO) {
    return this.authService.recovery(id, data)
  }

}
