import { Type } from 'class-transformer'
import { IsOptional, IsEnum, IsString, IsNotEmpty, ValidateNested } from 'class-validator'

import { type UserType } from '../../types'
import {
	UpdateUserProfileDto,
	type IUpdateUserProfileDto,
} from './update-user-profile.dto'
import { UpdateUserStatsDto, type IUpdateUserStatsDto } from './update-user-stats.dto'

export interface IUpdateUserDto {
	type?: UserType
	uuid?: string | null
	userProfile?: IUpdateUserProfileDto
	userStats?: IUpdateUserStatsDto
}

export class UpdateUserDto {
	@IsOptional()
	@IsEnum(['Admin', 'User', 'Guest'])
	type?: UserType

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	uuid?: string | null

	@IsOptional()
	@ValidateNested()
	@Type(() => UpdateUserProfileDto)
	userProfile?: UpdateUserProfileDto

	@IsOptional()
	@ValidateNested()
	@Type(() => UpdateUserStatsDto)
	userStats?: UpdateUserStatsDto
}
