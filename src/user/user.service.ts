import { Injectable } from '@nestjs/common';
import { UserInterface } from './interface/user.interface';
import PrismaService from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  async store(data: CreateUserDto) {
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
      },
      include: {
        UserHasTechnology: true,
        UserHaslanguage: true
      }
    })
    
    if(!user) {
      return { message: 'User not found' }
    }

    delete user.password
    return user
  }

  async createStack(data: any) {
    const stack = await PrismaService.userHasTechnology.create({
      data: {
        user_id: data.user_id,
        technology_id: data.technology_id
      }
    })

    return stack
  }

  async createMyLanguages(data: any) {
    const myLanguages = await PrismaService.userHaslanguage.create({
      data: {
        user_id: data.user_id,
        language_id: data.language_id
      }
    })

    return myLanguages
  }

  async update(id: number, data: CreateUserDto) {
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