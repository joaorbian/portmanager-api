import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsNumber,
  IsOptional
} from 'class-validator'

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  password: string

  @IsString()
  @IsOptional()
  name?: string

  @IsString()
  @IsOptional()
  job?: string

  @IsString()
  @IsOptional()
  city?: string

  @IsString()
  @IsOptional()
  text?: string

  @IsString()
  @IsOptional()
  favorite_color?: string

  @IsNumber()
  @IsNotEmpty()
  user_id?: number
} 