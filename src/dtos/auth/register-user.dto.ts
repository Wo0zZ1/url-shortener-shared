import { Type } from 'class-transformer'
import {
	IsString,
	IsNotEmpty,
	ValidateNested,
	IsOptional,
	MinLength,
	MaxLength,
} from 'class-validator'

import {
	ICreateUserStatsDto,
	ICreateUserProfileDto,
	CreateUserProfileDto,
	CreateUserStatsDto,
} from '../users'

export interface IRegisterUserDto {
	login: string
	password: string
	userProfile: ICreateUserProfileDto
	userStats?: ICreateUserStatsDto
}

export class RegisterUserDto implements IRegisterUserDto {
	@IsString()
	@IsNotEmpty()
	login: string

	@IsString()
	@MinLength(6)
	@MaxLength(100)
	password: string

	@ValidateNested()
	@IsNotEmpty()
	@Type(() => CreateUserProfileDto)
	userProfile: CreateUserProfileDto

	@ValidateNested()
	@IsOptional()
	@Type(() => CreateUserStatsDto)
	userStats?: CreateUserStatsDto
}
