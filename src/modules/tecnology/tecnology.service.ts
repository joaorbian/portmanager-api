import { Injectable } from '@nestjs/common'
import { CreateTecnologyDto } from './dto/create-tecnology.dto'
import { UpdateTecnologyDto } from './dto/update-tecnology.dto'
import PrismaService  from 'src/database/prismaService'

@Injectable()
export class TecnologyService {
  async store(data: CreateTecnologyDto) {
    const tecnolgyExists = await PrismaService.tecnology.findFirst({
      where: {
        name: data.name
      }
    })

    if(tecnolgyExists) {
      return { message: 'Tecnology already exists'}
    }

    await PrismaService.tecnology.create({
      data: {
        name: data.name,
        icon: data.icon,
        user: {
          connect: {
            id: Number(data.user_id)
          }
        }
      }
    })
    
    return { message: 'Tecnology created with success' }
  }
  
  async findAllByUser(id: number) {
    const tecnolgies = await PrismaService.tecnology.findMany({
      where: {
        user_id: Number(id)
      }
    })
    
    return tecnolgies
  }

  async findOneTecnology(id: number) {
    const tecnolgy = await PrismaService.tecnology.findFirst({
      where: {
        id: Number(id)
      },
      include: {
        user: true
      }
    })
    
    return tecnolgy
  }

  async update(id: number, updateTecnologyDto: UpdateTecnologyDto) {
    return `This action updates a #${id} tecnology`
  }

  async delete(id: number) {
    await PrismaService.tecnology.delete({
      where: {
        id: Number(id)
      }
    })

    return { message: 'Tecnology deleted with success' }
  }


}
