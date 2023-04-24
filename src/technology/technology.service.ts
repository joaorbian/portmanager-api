import { Injectable } from '@nestjs/common';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
import PrismaService  from 'src/database/prisma.service'


@Injectable()
export class TechnologyService {
  
  async store(createTechnologyDto: CreateTechnologyDto) {
    const tecnolgyExists = await PrismaService.tecnology.findFirst({
      where: {
        name: createTechnologyDto.name
      }
    })

    if(tecnolgyExists) {
      return { message: 'Tecnology already exists'}
    }

    await PrismaService.tecnology.create({
      data: {
        name: createTechnologyDto.name,
        icon: createTechnologyDto.icon,
        user: {
          connect: {
            id: Number(createTechnologyDto.user_id)
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

  async update(id: number, updateTechnologyDto: UpdateTechnologyDto) {
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
