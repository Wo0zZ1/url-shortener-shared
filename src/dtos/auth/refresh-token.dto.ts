import { IsNotEmpty, IsString } from 'class-validator'

export interface IRefreshTokenDto {
	refreshToken: string
}

export class RefreshTokenDto implements IRefreshTokenDto {
	@IsString()
	@IsNotEmpty()
	refreshToken: string
}
