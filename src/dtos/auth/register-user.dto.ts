import { Type } from 'class-transformer'
import { IsString, IsNotEmpty, ValidateNested, IsOptional } from 'class-validator'

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
	@IsNotEmpty()
	password: string

	@ValidateNested()
	@IsNotEmpty()
	@Type(() => CreateUserProfileDto)
	userProfile: CreateUserProfileDto

	@IsOptional()
	@ValidateNested()
	@Type(() => CreateUserStatsDto)
	userStats?: CreateUserStatsDto
}
