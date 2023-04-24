import { Injectable } from '@nestjs/common'
import PrismaService from 'src/database/prisma.service'
import { UserDTO } from '../user/interface/user.interface'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) { }

  async login(data: UserDTO) {
    const user = await PrismaService.user.findUnique({
      where: {
        email: data.email
      }
    })

    if(!user) {
      return { message: 'User not found' }
    }

		const passwordMatch = await bcrypt.compare(data.password, user.password)

    if(!passwordMatch) {
      return { message: 'Incorret password' }
    }

    delete user.password
    
    return  { 
      acess_token: this.jwtService.sign(user)
    }
  }

  async recovery(id: number, data: UserDTO) {
    data.password = await bcrypt.hash(data.password, 10)

    await PrismaService.user.update({
      where: {
        id: Number(id)
      },
      data: data
    })
    
    return { message: 'Password updated with success' }
  }

}
