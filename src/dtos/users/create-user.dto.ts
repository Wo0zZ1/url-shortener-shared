import { IsEnum, IsOptional, IsString, IsNotEmpty, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { UserType } from '../../types'

import { ICreateUserProfileDto, CreateUserProfileDto } from './create-user-profile.dto'
import { ICreateUserStatsDto, CreateUserStatsDto } from './create-user-stats.dto'
import { ApiProperty } from '@nestjs/swagger'

export interface ICreateUserDto {
	type?: UserType
	uuid?: string
	userProfile?: ICreateUserProfileDto
	userStats?: ICreateUserStatsDto
}

export class CreateUserDto implements ICreateUserDto {
	@IsEnum(['Admin', 'User', 'Guest'])
	@IsOptional()
	@ApiProperty({
		description: 'Type of the user',
		enum: ['Admin', 'User', 'Guest'],
		required: false,
		example: 'User',
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
	uuid?: string

	@ValidateNested()
	@Type(() => CreateUserProfileDto)
	@ApiProperty({ type: CreateUserProfileDto, required: false })
	userProfile?: CreateUserProfileDto

	@ValidateNested()
	@Type(() => CreateUserStatsDto)
	@ApiProperty({ type: CreateUserStatsDto, required: false })
	userStats?: CreateUserStatsDto
}
