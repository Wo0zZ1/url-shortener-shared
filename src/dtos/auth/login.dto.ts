import { IsString, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export interface ILoginDto {
	login: string
	password: string
}

export class LoginDto implements ILoginDto {
	@ApiProperty({ description: 'User login', example: 'user_login' })
	@IsString()
	@IsNotEmpty()
	login: string

	@ApiProperty({ description: 'User password', example: 'user_password' })
	@IsString()
	@IsNotEmpty()
	password: string
}
