import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export interface ICreateUserProfileDto {
	email?: string
	userName: string
	firstName?: string
	lastName?: string
}

export class CreateUserProfileDto implements ICreateUserProfileDto {
	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@ApiProperty({
		description: 'User email address',
		required: false,
		example: 'example@email.com',
	})
	email?: string

	@IsString()
	@IsNotEmpty()
	@ApiProperty({ description: 'User name', example: 'user_name' })
	userName: string

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@ApiProperty({ description: 'User first name', required: false, example: 'John' })
	firstName?: string

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@ApiProperty({ description: 'User last name', required: false, example: 'Doe' })
	lastName?: string
}
