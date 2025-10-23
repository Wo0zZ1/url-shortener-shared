import { IsString, IsNotEmpty, IsOptional } from 'class-validator'

export interface ILoginDto {
	login: string
	password: string
}

export class LoginDto implements ILoginDto {
	@IsString()
	@IsNotEmpty()
	@IsOptional()
	login: string

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	password: string
}
