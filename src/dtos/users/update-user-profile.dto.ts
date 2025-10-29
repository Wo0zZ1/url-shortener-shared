import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsOptional } from 'class-validator'

export interface IUpdateUserProfileDto {
	email?: string | null
	userName?: string
	firstName?: string | null
	lastName?: string | null
}

export class UpdateUserProfileDto implements IUpdateUserProfileDto {
	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@ApiProperty({ description: 'User email address', example: 'user_login' })
	email?: string | null

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@ApiProperty({ description: 'User name', example: 'user_name' })
	userName?: string

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@ApiProperty({ description: 'User first name', example: 'John' })
	firstName?: string | null

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@ApiProperty({ description: 'User last name', example: 'Doe' })
	lastName?: string | null
}
