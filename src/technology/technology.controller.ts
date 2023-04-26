import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { TechnologyService } from './technology.service';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('technology')
export class TechnologyController {
  constructor(
    private readonly technologyService: TechnologyService
  ) { }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() data: CreateTechnologyDto) {
    return this.technologyService.store(data)
  }

  @UseGuards(AuthGuard)
  @Get('all')
  findAll() {
    return this.technologyService.findAll()
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.technologyService.findOneTechnology(id)
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() updateTechnologyDto: UpdateTechnologyDto) {
    return this.technologyService.update(id, updateTechnologyDto)
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.technologyService.delete(id)
  }


}
