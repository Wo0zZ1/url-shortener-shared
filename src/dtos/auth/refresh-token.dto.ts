import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export interface IRefreshTokenDto {
	refreshToken: string
}

export class RefreshTokenDto implements IRefreshTokenDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty({ description: 'Refresh token', example: 'some_refresh_token' })
	refreshToken: string
}
