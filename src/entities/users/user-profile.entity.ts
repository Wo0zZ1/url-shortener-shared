import {
	IsEmail,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	MaxLength,
	MinLength,
} from 'class-validator'

export interface IUserProfileEntity {
	id: number
	userName: string
	email?: string | null
	firstName?: string | null
	lastName?: string | null
}

export class UserProfileEntity implements IUserProfileEntity {
	@IsNumber()
	@IsNotEmpty()
	id: number

	@IsString()
	@MinLength(2)
	@MaxLength(50)
	@IsNotEmpty()
	userName: string

	@IsString()
	@IsEmail()
	@IsOptional()
	email?: string | null

	@IsString()
	@MinLength(1)
	@MaxLength(50)
	@IsOptional()
	firstName?: string | null

	@IsString()
	@MinLength(1)
	@MaxLength(50)
	@IsOptional()
	lastName?: string | null
}
