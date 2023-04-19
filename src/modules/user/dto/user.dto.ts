import { CreateTecnologyDto } from "src/modules/tecnology/dto/create-tecnology.dto"

export type UserDTO = {
  createdAt?: Date | string
  updatedAt?: Date | string
  email: string
  password: string
  name?: string
  job?: string
  language?: string
  city?: string
  text?: string
  color?: string
}