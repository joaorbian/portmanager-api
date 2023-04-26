import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import PrismaService from 'src/database/prisma.service';


@Injectable()
export class LanguageService {


  async create(data: any) {
    const languageExists = await PrismaService.language.findFirst({
      where: {
        name: data.name
      }
    })

    if(languageExists) {
      return { message: 'Idioma já existe'}
    }

    const languages = await PrismaService.language.create({
      data: {
        name: data.name,
        icon: data.icon
      }
    })

    return languages
  }

  async findAll() {
    return await PrismaService.language.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} language`;
  }

  update(id: number, updateLanguageDto: UpdateLanguageDto) {
    return `This action updates a #${id} language`;
  }

  remove(id: number) {
    return `This action removes a #${id} language`;
  }
}
