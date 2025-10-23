import { IsEnum, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import type { UserType } from '../../types'
import {
	CreateUserProfileDto,
	type ICreateUserProfileDto,
} from './create-user-profile.dto'
import { CreateUserStatsDto, type ICreateUserStatsDto } from './create-user-stats.dto'

export interface ICreateUserDto {
	type?: UserType
	uuid?: string
	userProfile?: ICreateUserProfileDto
	userStats?: ICreateUserStatsDto
}

export class CreateUserDto {
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
