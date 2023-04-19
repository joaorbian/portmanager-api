import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common'
import { TecnologyService } from './tecnology.service'
import { CreateTecnologyDto } from './dto/create-tecnology.dto'
import { UpdateTecnologyDto } from './dto/update-tecnology.dto'
import { AuthGuard } from '../auth/auth.guard'

@Controller('tecnology')
export class TecnologyController {
  constructor(
    private readonly tecnologyService: TecnologyService
  ) { }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() data: CreateTecnologyDto) {
    return this.tecnologyService.store(data)
  }

  @UseGuards(AuthGuard)
  @Get('all/:id')
  findAll(@Param('id') id: number) {
    return this.tecnologyService.findAllByUser(id)
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tecnologyService.findOneTecnology(id)
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() updateTecnologyDto: UpdateTecnologyDto) {
    return this.tecnologyService.update(id, updateTecnologyDto)
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tecnologyService.delete(id)
  }
}
