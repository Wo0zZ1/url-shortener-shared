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
	baseLink: string

	@IsString()
	@IsOptional()
	customShortLink?: string
}
