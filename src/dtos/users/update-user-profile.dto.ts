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
	email?: string | null

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	userName?: string

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	firstName?: string | null

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	lastName?: string | null
}
