import { PartialType } from '@nestjs/mapped-types';
import { CreateTecnologyDto } from './create-tecnology.dto';

export class UpdateTecnologyDto extends PartialType(CreateTecnologyDto) {}
