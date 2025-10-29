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
	@ApiProperty({
		description: 'User email address',
		required: false,
		example: 'user_login',
	})
	email?: string | null

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@ApiProperty({ description: 'User name', required: false, example: 'user_name' })
	userName?: string

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@ApiProperty({ description: 'User first name', required: false, example: 'John' })
	firstName?: string | null

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@ApiProperty({ description: 'User last name', required: false, example: 'Doe' })
	lastName?: string | null
}
