import { IsNumber, IsOptional } from 'class-validator'

export interface IUpdateUserStatsDto {
	created_links?: number
}

export class UpdateUserStatsDto implements IUpdateUserStatsDto {
	@IsOptional()
	@IsNumber()
	created_links?: number
}
