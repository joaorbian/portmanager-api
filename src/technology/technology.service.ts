import { Injectable } from '@nestjs/common';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
import PrismaService from 'src/database/prisma.service'


@Injectable()
export class TechnologyService {
  async store(createTechnologyDto: CreateTechnologyDto) {
    const tecnolhgyExists = await PrismaService.technology.findFirst({
      where: {
        name: createTechnologyDto.name
      }
    })

    if(tecnolhgyExists) {
      return { message: 'Technology already exists'}
    }

    await PrismaService.technology.create({
      data: {
        name: createTechnologyDto.name,
        icon: createTechnologyDto.icon
      }
    })
    
    return { message: 'Technology created with success' }
  }
  
  async findAll() {
    return await PrismaService.technology.findMany()
  }

  async findOneTechnology(id: number) {
    const tehcnolgy = await PrismaService.technology.findUnique({
      where: {
        id: Number(id)
      }
    })

    return tehcnolgy
  }

  async update(id: number, updateTechnologyDto: UpdateTechnologyDto) {
    return `This action updates a #${id} technology`
  }

  async delete(id: number) {
    await PrismaService.technology.delete({
      where: {
        id: Number(id)
      }
    })

    return { message: 'Technology deleted with success' }
  }

}
