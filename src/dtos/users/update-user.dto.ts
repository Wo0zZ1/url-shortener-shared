import { IsOptional, IsEnum, IsString, IsNotEmpty, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { UserType } from '../../types'

import { IUpdateUserProfileDto, UpdateUserProfileDto } from './update-user-profile.dto'
import { IUpdateUserStatsDto, UpdateUserStatsDto } from './update-user-stats.dto'
import { ApiProperty } from '@nestjs/swagger'

export interface IUpdateUserDto {
	type?: UserType
	uuid?: string | null
	userProfile?: IUpdateUserProfileDto
	userStats?: IUpdateUserStatsDto
}

export class UpdateUserDto implements IUpdateUserDto {
	@IsOptional()
	@IsEnum(['Admin', 'User', 'Guest'])
	@ApiProperty({
		description: 'Type of the user',
		example: 'User',
		required: false,
		enum: ['Admin', 'User', 'Guest'],
	})
	type?: UserType

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@ApiProperty({
		description: 'User UUID',
		required: false,
		example: '550e8400-e29b-41d4-a716-446655440000',
	})
	uuid?: string | null

	@IsOptional()
	@ValidateNested()
	@Type(() => UpdateUserProfileDto)
	@ApiProperty({ type: UpdateUserProfileDto, required: false })
	userProfile?: UpdateUserProfileDto

	@IsOptional()
	@ValidateNested()
	@Type(() => UpdateUserStatsDto)
	@ApiProperty({ type: UpdateUserStatsDto, required: false })
	userStats?: UpdateUserStatsDto
}
