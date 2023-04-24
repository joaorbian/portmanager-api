import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsNumber
} from 'class-validator'

export class CreateTechnologyDto {
  @IsNotEmpty()
  @IsNumber()
  id: number

  @IsDate()
  @IsString()
  @IsNotEmpty()
  created_at: Date

  @IsDate()
  @IsString()
  @IsNotEmpty()
  updated_at: Date

  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  icon: string
  
  @IsNumber()
  @IsNotEmpty()
  user_id: number
}
