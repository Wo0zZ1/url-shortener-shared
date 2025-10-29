import { Type } from 'class-transformer'
import {
	IsString,
	IsNotEmpty,
	ValidateNested,
	MinLength,
	MaxLength,
} from 'class-validator'

import {
	ICreateUserStatsDto,
	ICreateUserProfileDto,
	CreateUserProfileDto,
	CreateUserStatsDto,
} from '../users'
import { ApiProperty } from '@nestjs/swagger'

export interface IRegisterUserDto {
	login: string
	password: string
	userProfile: ICreateUserProfileDto
	userStats?: ICreateUserStatsDto
}

export class RegisterUserDto implements IRegisterUserDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty({ description: 'User login', example: 'user_login' })
	login: string

	@IsString()
	@MinLength(6)
	@MaxLength(100)
	@ApiProperty({ description: 'User password', example: 'user_password' })
	password: string

	@ValidateNested()
	@IsNotEmpty()
	@ApiProperty({ type: CreateUserProfileDto })
	@Type(() => CreateUserProfileDto)
	userProfile: CreateUserProfileDto
}
