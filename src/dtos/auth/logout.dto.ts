import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export interface ILogoutDto {
	refreshToken: string
}

export class LogoutDto implements ILogoutDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		description: 'Refresh token to be invalidated',
		example: 'some_refresh_token',
	})
	refreshToken: string
}
