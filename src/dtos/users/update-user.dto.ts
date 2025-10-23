import { IsOptional, IsEnum, IsString, IsNotEmpty, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { UserType } from '../../types'

import { IUpdateUserProfileDto, UpdateUserProfileDto } from './update-user-profile.dto'
import { IUpdateUserStatsDto, UpdateUserStatsDto } from './update-user-stats.dto'

export interface IUpdateUserDto {
	type?: UserType
	uuid?: string | null
	userProfile?: IUpdateUserProfileDto
	userStats?: IUpdateUserStatsDto
}

export class UpdateUserDto implements IUpdateUserDto {
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
