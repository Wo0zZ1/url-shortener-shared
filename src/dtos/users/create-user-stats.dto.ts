import { IsNumber, IsOptional } from 'class-validator'

export interface ICreateUserStatsDto {
	created_links?: number
}

export class CreateUserStatsDto implements ICreateUserStatsDto {
	@IsNumber()
	@IsOptional()
	created_links?: number
}
