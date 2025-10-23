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
	email?: string

	@IsString()
	@IsNotEmpty()
	userName: string

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	firstName?: string

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	lastName?: string
}
