import { IsInt, IsUrl, IsString, IsOptional } from 'class-validator'

export interface ICreateLinkDto {
	userId: number
	baseLink: string
	customShortLink?: string
}

export class CreateLinkDto implements ICreateLinkDto {
	@IsInt()
	userId: number

	@IsUrl({
		require_valid_protocol: true,
		allow_underscores: true,
	})
	baseLink: string

	@IsString()
	@IsOptional()
	customShortLink?: string
}
