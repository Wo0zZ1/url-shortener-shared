import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export interface IUserProfileEntity {
	id: number
	userName: string
	firstName?: string | null
	lastName?: string | null
}

export class UserProfileEntity implements IUserProfileEntity {
	@IsNumber()
	@IsNotEmpty()
	id: number

	@IsString()
	@IsNotEmpty()
	userName: string

	@IsString()
	@IsOptional()
	firstName?: string | null

	@IsString()
	@IsOptional()
	lastName?: string | null
}
