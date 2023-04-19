import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import PrismaService from 'src/database/prismaService';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  async store(data: UserDTO) {
    const userExists = await PrismaService.user.findFirst({
      where: {
        email: data.email
      }
    })

    if(userExists) {
      return { message: 'Email already exists' }
    }

    data.password = await bcrypt.hash(data.password, 10)
    await PrismaService.user.create({
      data
    })

    return { message: 'User created with success' }
  }
  
  async getOne(id: number) {
    const user = await PrismaService.user.findFirst({
      where: {
        id: Number(id)
      }
    })
    
    if(!user) {
      return { message: 'User not found' }
    }

    delete user.password
    return user
  }

  async update(id: number, data: UserDTO) {
    const user = await PrismaService.user.update({
      where: {
        id: Number(id)
      },
      data: data
    })
  
    delete user.password
    return user
  }

  async delete(id: number) {
    await PrismaService.user.delete({
      where: {
        id: Number(id)
      }
    })

    return { message: 'User deleted with success' }
  }
  
}