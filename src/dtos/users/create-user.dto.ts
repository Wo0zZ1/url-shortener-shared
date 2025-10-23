import { IsEnum, IsOptional, IsString, IsNotEmpty, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { UserType } from '../../types'

import { ICreateUserProfileDto, CreateUserProfileDto } from './create-user-profile.dto'
import { ICreateUserStatsDto, CreateUserStatsDto } from './create-user-stats.dto'

export interface ICreateUserDto {
	type?: UserType
	uuid?: string
	userProfile?: ICreateUserProfileDto
	userStats?: ICreateUserStatsDto
}

export class CreateUserDto implements ICreateUserDto {
	@IsEnum(['Admin', 'User', 'Guest'])
	@IsOptional()
	type?: UserType

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	uuid?: string

	@ValidateNested()
	@Type(() => CreateUserProfileDto)
	userProfile?: CreateUserProfileDto

	@ValidateNested()
	@Type(() => CreateUserStatsDto)
	userStats?: CreateUserStatsDto
}
