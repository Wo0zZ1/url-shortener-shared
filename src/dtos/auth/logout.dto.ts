import { IsNotEmpty, IsString } from 'class-validator'

export interface ILogoutDto {
	refreshToken: string
}

export class LogoutDto implements ILogoutDto {
	@IsString()
	@IsNotEmpty()
	refreshToken: string
}
