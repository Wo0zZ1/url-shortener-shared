import { ApiProperty } from '@nestjs/swagger'
import { IsUrl, IsString, IsOptional } from 'class-validator'

export interface ICreateLinkDto {
	baseLink: string
	customShortLink?: string
}

export class CreateLinkDto implements ICreateLinkDto {
	@IsUrl({
		require_valid_protocol: true,
		allow_underscores: true,
	})
	@ApiProperty({
		description: 'The original URL to be shortened',
		example: 'https://example.com',
	})
	baseLink: string

	@IsString()
	@IsOptional()
	@ApiProperty({ description: 'Custom short link', example: 'mylink' })
	customShortLink?: string
}
