import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsNumber
} from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty()
  @IsNumber()
  id: number

  @IsDate()
  @IsString()
  @IsNotEmpty()
  created_at: Date

  @IsString()
  @IsNotEmpty()
  updated_at: Date

  @IsString()
  @IsNotEmpty()
  email: Date

  @IsString()
  @IsNotEmpty()
  password: string

  @IsString()
  name: string

  @IsString()
  job: string

  @IsString()
  city: string

  @IsString()
  text: string

  @IsString()
  favorite_color: string

  @IsNumber()
  @IsNotEmpty()
  user_id: number
} 